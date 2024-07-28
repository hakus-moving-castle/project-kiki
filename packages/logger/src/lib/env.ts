import z from "zod";

const envSchema = z.object({
  LOG_LEVEL: z.string().default("http"),
  LOGTAIL_SOURCE_TOKEN: z.string(),
});

export const env = envSchema.parse(process.env);

export default env;
