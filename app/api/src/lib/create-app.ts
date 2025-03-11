import { OpenAPIHono } from '@hono/zod-openapi';
import { cors } from 'hono/cors';
import { serveStatic } from 'hono/serve-static';
import { getMimeType } from 'hono/utils/mime';

import fs from 'node:fs';
import path from 'node:path';
import { file } from 'bun';
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
    '/images/*',
    serveStatic({
      root: path.join(__dirname, '../../public'),
      getContent: async (filePath) => {
        const file = await fs.readFileSync(filePath);
        return new Response(file, {
          headers: {
            'Content-Type': getMimeType(filePath) || '',
          },
        });
      },
    }),
  );

  app.use(
    '/api/*',
    cors({
      origin: 'https://localhost:5173/',
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
