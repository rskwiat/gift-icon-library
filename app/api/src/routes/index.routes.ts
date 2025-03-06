import { createRoute } from '@hono/zod-openapi';
import * as HttpStatusCodes from '../constants/status-codes';
import { healthcheckSchema } from './schemas';

const tags = ['index'];

export const healthcheck = createRoute({
  tags,
  method: 'get',
  path: '/healthcheck',
  responses: {
    [HttpStatusCodes.OK]: {
      content: {
        'application/json': {
          schema: healthcheckSchema,
        },
      },
      description: 'Healthcheck - app is running',
    },
  },
});

export type HealthCheckRoute = typeof healthcheck;
