const REQUIRED_ENV_KEYS = ["DISCORD_TOKEN", "PUBLIC_KEY", "APP_ID"] as const;

type RequiredEnvKey = (typeof REQUIRED_ENV_KEYS)[number];

function getMissingRequiredEnv(): RequiredEnvKey[] {
  return REQUIRED_ENV_KEYS.filter((key) => !process.env[key]);
}

function validateRequiredEnv(): void {
  const missing = getMissingRequiredEnv();
  if (missing.length === 0) return;

  throw new Error(
    `Missing required environment variables: ${missing.join(", ")}`
  );
}

export { getMissingRequiredEnv, validateRequiredEnv };
