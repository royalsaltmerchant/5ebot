import fetch from 'node-fetch';
import { DiscordRequest } from '../api/discordUtils.js';
import { log, logError } from './logger.js';

const FARREACH_SEARCH_URL = 'https://farreachco.com/dnd/5e/srd/search';
const MAX_DISCORD_LENGTH = 1900;
const MORE_LINK = '\n\nRead more: https://farreachco.com/dnd/5e/srd/contents';

function appendReadMoreLink(text: string): string {
  if (text.includes('farreachco.com/dnd/5e/srd/')) return text;
  return `${text}${MORE_LINK}`;
}

function formatForDiscord(text: string): string {
  const withLink = appendReadMoreLink(text.trim());
  if (withLink.length <= MAX_DISCORD_LENGTH) return withLink;

  const allowed = MAX_DISCORD_LENGTH - MORE_LINK.length - 3;
  const truncated = text.trim().slice(0, Math.max(0, allowed));
  return `${truncated}...${MORE_LINK}`;
}

export async function handleQueryResponse(
  question: string,
  short: boolean,
  appId: string,
  interactionToken: string,
): Promise<void> {
  const startedAt = Date.now();
  let answer: string;

  try {
    const res = await fetch(FARREACH_SEARCH_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: question, short }),
    });

    if (!res.ok) {
      log('warn', 'query_upstream_non_200', {
        status: res.status,
        durationMs: Date.now() - startedAt,
        short,
        questionLength: question.length,
      });
      answer = 'The SRD search service is currently unavailable. Try again later.';
    } else {
      const data = await res.json() as { answer?: string };
      log('info', 'query_upstream_ok', {
        status: res.status,
        durationMs: Date.now() - startedAt,
        short,
        questionLength: question.length,
      });
      answer = data.answer || 'No answer was returned.';
    }
  } catch (err) {
    logError('query_upstream_failed', err, {
      durationMs: Date.now() - startedAt,
      short,
      questionLength: question.length,
    });
    answer = 'Failed to reach the SRD search service. Try again later.';
  }

  const content = formatForDiscord(answer);

  await DiscordRequest(`webhooks/${appId}/${interactionToken}/messages/@original`, {
    method: 'PATCH',
    body: { content },
  });

  log('info', 'query_reply_patched', {
    durationMs: Date.now() - startedAt,
    short,
    questionLength: question.length,
    responseLength: content.length,
  });
}
