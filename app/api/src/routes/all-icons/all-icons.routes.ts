import { createRoute } from '@hono/zod-openapi';
import { z } from 'zod';
import * as HttpStatusCodes from '../../constants/status-codes';

import { iconSchema } from '../schemas';

const tags = ['all-icons'];

export const allIcons = createRoute({
  tags,
  method: 'get',
  path: '/all-icons',
  responses: {
    [HttpStatusCodes.OK]: {
      content: {
        'application/json': {
          schema: z.array(iconSchema),
        },
      },
      description: 'A list of all icons',
    },
  },
});

export type AllIconsRoute = typeof allIcons;
