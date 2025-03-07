import { z } from 'zod';

export const healthcheckSchema = z.object({
  message: z.string().openapi({
    example: 'API is up and running',
  }),
});

export const iconSchema = z.object({
  name: z.string().openapi({
    example: 'Icon name',
  }),
  id: z.string().openapi({
    example: '123-456',
  }),
});
