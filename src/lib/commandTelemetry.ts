import fetch from "node-fetch";
import { log, logError } from "./logger.js";

const FARREACH_COMMAND_EVENT_URL = "https://farreachco.com/dnd/5e/srd/command-event";

type CommandOption = {
  name?: string;
  value?: unknown;
  options?: CommandOption[];
};

export interface SlashCommandTelemetryInput {
  commandName: string;
  options?: CommandOption[];
  userId?: string | null;
  guildId?: string | null;
  requestId?: string | null;
  interactionId?: string | null;
}

function flattenOptionPairs(options: CommandOption[] | undefined): string[] {
  if (!Array.isArray(options)) return [];
  const pairs: string[] = [];

  const walk = (nodes: CommandOption[], parentPath = "") => {
    for (const node of nodes) {
      const safeName =
        typeof node?.name === "string" && node.name.trim().length
          ? node.name.trim().slice(0, 60)
          : "option";
      const key = parentPath ? `${parentPath}.${safeName}` : safeName;
      if (node?.value !== undefined && node?.value !== null) {
        pairs.push(`${key}:${String(node.value).trim().slice(0, 120)}`);
      }
      if (Array.isArray(node?.options) && node.options.length) {
        walk(node.options, key);
      }
    }
  };

  walk(options);
  return pairs.slice(0, 40);
}

function normalizeQueryText(commandName: string, options: CommandOption[] | undefined): string {
  if (commandName === "query") {
    const directQuestion = options?.find((opt) => opt?.name === "question")?.value;
    if (typeof directQuestion === "string" && directQuestion.trim().length) {
      return directQuestion.trim().replace(/\s+/g, " ").slice(0, 500);
    }
  }

  const optionPairs = flattenOptionPairs(options);
  const joined = optionPairs.length ? `${commandName} ${optionPairs.join(" ")}` : commandName;
  return joined.trim().replace(/\s+/g, " ").slice(0, 500);
}

function buildHeaders(input: SlashCommandTelemetryInput): Record<string, string> {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    "X-SRD-Source": "discord_5ebot_command",
  };
  if (input.userId) headers["X-SRD-User-Id"] = input.userId;
  if (input.guildId) headers["X-SRD-Guild-Id"] = input.guildId;
  if (input.requestId) headers["X-SRD-Request-Id"] = input.requestId;
  return headers;
}

export async function sendSlashCommandTelemetry(
  input: SlashCommandTelemetryInput,
): Promise<void> {
  const startedAt = Date.now();

  try {
    const queryText = normalizeQueryText(input.commandName, input.options);
    const res = await fetch(FARREACH_COMMAND_EVENT_URL, {
      method: "POST",
      headers: buildHeaders(input),
      body: JSON.stringify({
        commandName: input.commandName,
        queryText,
        rawQueryText: queryText,
        options: input.options || [],
        userId: input.userId || null,
        guildId: input.guildId || null,
        commandId: input.interactionId || null,
      }),
    });

    if (!res.ok) {
      log("warn", "command_telemetry_upstream_non_200", {
        commandName: input.commandName,
        status: res.status,
        durationMs: Date.now() - startedAt,
      });
      return;
    }

    log("info", "command_telemetry_upstream_ok", {
      commandName: input.commandName,
      status: res.status,
      durationMs: Date.now() - startedAt,
    });
  } catch (err) {
    logError("command_telemetry_upstream_failed", err, {
      commandName: input.commandName,
      durationMs: Date.now() - startedAt,
    });
  }
}
