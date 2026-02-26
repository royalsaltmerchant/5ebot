import { InteractionResponseType } from "discord-interactions";
import { NextFunction, Request, Response } from "express";

const WINDOW_MS = 10_000;
const MAX_REQUESTS_PER_WINDOW = 12;
const buckets = new Map<string, { count: number; expiresAt: number }>();

function getRateLimitKey(req: Request): string {
  const guildId = req.body?.guild_id;
  if (guildId) return `guild:${guildId}`;

  const userId = req.body?.member?.user?.id || req.body?.user?.id;
  if (userId) return `user:${userId}`;

  return `ip:${req.ip}`;
}

function interactionRateLimiter(req: Request, res: Response, next: NextFunction) {
  const now = Date.now();
  const key = getRateLimitKey(req);
  const existing = buckets.get(key);

  if (!existing || existing.expiresAt <= now) {
    buckets.set(key, { count: 1, expiresAt: now + WINDOW_MS });
    return next();
  }

  if (existing.count >= MAX_REQUESTS_PER_WINDOW) {
    return res.status(429).send({
      type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
      data: {
        content: "Too many requests. Please wait a few seconds and try again.",
        flags: 64,
      },
    });
  }

  existing.count += 1;
  buckets.set(key, existing);
  return next();
}

export { interactionRateLimiter };
