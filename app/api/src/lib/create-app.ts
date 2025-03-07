import { OpenAPIHono } from '@hono/zod-openapi';
import { cors } from 'hono/cors';

import * as HttpStatusCodes from '../constants/status-codes';
import * as HttpStatusMessages from '../constants/status-messages';
import env from '../env';
import { Logger } from '../middlewares/logger';
import type { AppBindings } from './types';

export function createRouter() {
  return new OpenAPIHono<AppBindings>({
    strict: false,
    defaultHook: (result, c) => {
      if (!result.success) {
        return c.json(
          {
            sucess: result.success,
            error: result.error,
          },
          HttpStatusCodes.UNPROCESSABLE_ENTITY,
        );
      }
    },
  });
}

export default function CreateApp() {
  const app = createRouter();
  app.use(Logger());

  app.use(
    '/api/*',
    cors({
      origin: env.APP_URL,
    }),
  );

  app.notFound((c) => {
    return c.json(
      {
        message: `${HttpStatusMessages.NOT_FOUND} - ${c.req.path}`,
      },
      HttpStatusCodes.NOT_FOUND,
    );
  });

  app.onError((err, c) => {
    return c.json(
      {
        message: err.message,
      },
      HttpStatusCodes.INTERNAL_SERVER_ERROR,
    );
  });

  return app;
}
