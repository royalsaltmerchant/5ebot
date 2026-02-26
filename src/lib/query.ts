import fetch from 'node-fetch';
import { DiscordRequest } from '../api/discordUtils.js';

const FARREACH_SEARCH_URL = 'https://farreachco.com/dnd/5e/srd/search';
const MAX_DISCORD_LENGTH = 1800;
const MORE_LINK = '\n\n— [Full answer at farreachco.com](https://farreachco.com/dnd/5e/srd/contents)';

function truncateForDiscord(text: string): string {
  if (text.length <= MAX_DISCORD_LENGTH) return text;
  return text.slice(0, MAX_DISCORD_LENGTH) + MORE_LINK;
}

export async function handleQueryResponse(
  question: string,
  short: boolean,
  appId: string,
  interactionToken: string,
): Promise<void> {
  let answer: string;

  try {
    const res = await fetch(FARREACH_SEARCH_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: question, short }),
    });

    if (!res.ok) {
      answer = 'The SRD search service is currently unavailable. Try again later.';
    } else {
      const data = await res.json() as { answer?: string };
      answer = data.answer || 'No answer was returned.';
    }
  } catch {
    answer = 'Failed to reach the SRD search service. Try again later.';
  }

  const content = truncateForDiscord(answer);

  await DiscordRequest(`webhooks/${appId}/${interactionToken}/messages/@original`, {
    method: 'PATCH',
    body: { content },
  });
}
