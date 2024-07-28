import z from 'zod';

const envSchema = z.object({});

export default envSchema.parse(process.env);
