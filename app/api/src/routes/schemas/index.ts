import { z } from 'zod';

export const healthcheckSchema = z.object({
  message: z.string().openapi({
    example: 'API is up and running',
  }),
});
