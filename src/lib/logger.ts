import { NextFunction, Request, Response } from "express";
import { randomUUID } from "crypto";

type LogLevel = "info" | "warn" | "error";

function log(level: LogLevel, message: string, meta?: Record<string, unknown>) {
  const entry = {
    ts: new Date().toISOString(),
    level,
    message,
    ...(meta || {}),
  };

  if (level === "error") {
    console.error(JSON.stringify(entry));
    return;
  }

  console.log(JSON.stringify(entry));
}

function requestLogger(req: Request, res: Response, next: NextFunction) {
  const requestId = randomUUID();
  res.setHeader("X-Request-Id", requestId);
  (req as any).requestId = requestId;

  const start = Date.now();
  const interactionType = req.body?.type;
  const command = req.body?.data?.name;
  const customId = req.body?.data?.custom_id;
  const guildId = req.body?.guild_id;
  const userId = req.body?.member?.user?.id || req.body?.user?.id;

  res.on("finish", () => {
    log("info", "http_request", {
      requestId,
      method: req.method,
      path: req.originalUrl,
      statusCode: res.statusCode,
      durationMs: Date.now() - start,
      ip: req.ip,
      interactionType,
      command,
      customId,
      guildId,
      userId,
    });
  });

  next();
}

function logError(message: string, err: unknown, meta?: Record<string, unknown>) {
  const stack = err instanceof Error ? err.stack : undefined;
  log("error", message, {
    error: err instanceof Error ? err.message : String(err),
    stack,
    ...(meta || {}),
  });
}

export { log, logError, requestLogger };
