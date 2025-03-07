import { createRoute } from '@hono/zod-openapi';
import * as HttpStatusCodes from '../../constants/status-codes';

import { iconSchema, idParamsSchema, notFoundSchema } from '../schemas';

const tags = ['icon'];

export const singleIcon = createRoute({
  tags,
  method: 'get',
  path: '/icon/:id',
  request: {
    params: idParamsSchema,
  },
  responses: {
    [HttpStatusCodes.OK]: {
      content: {
        'application/json': {
          schema: iconSchema,
        },
      },
      description: 'A list of all icons',
    },
    [HttpStatusCodes.NOT_FOUND]: {
      content: {
        'application/json': {
          schema: notFoundSchema,
        },
      },
      description: 'No icon found',
    },
  },
});

export type SingleIconRoute = typeof singleIcon;
