import { z } from 'zod';
import * as HttpStatusMessage from '../../constants/status-messages';

export const healthcheckSchema = z.object({
  message: z.string().openapi({
    example: 'API is up and running',
  }),
});

export const iconSchema = z.object({
  name: z.string().openapi({
    example: 'Icon name',
  }),
  id: z.coerce.number().openapi({
    example: 3,
  }),
  key: z.string().openapi({
    example: '123-456',
  }),
});

export const notFoundSchema = z
  .object({
    message: z.string(),
  })
  .openapi({
    example: {
      message: HttpStatusMessage.NOT_FOUND,
    },
  });

export const idParamsSchema = z.object({
  id: z.coerce.number().openapi({
    param: {
      name: 'id',
      in: 'path',
    },
    required: ['id'],
    example: 42,
  }),
});
