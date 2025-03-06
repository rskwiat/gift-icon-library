import { apiReference } from '@scalar/hono-api-reference';

import type { AppOpenAPI } from './types';
import packageJSON from '../../package.json';

export default function configureOpenApi(app: AppOpenAPI) {
  app.doc('/doc', {
    openapi: '3.0.0',
    info: {
      version: packageJSON.version,
      title: packageJSON.name,
    },
  });

  app.get(
    '/reference',
    apiReference({
      layout: 'classic',
      defaultHttpClient: {
        targetKey: 'js',
        clientKey: 'fetch',
      },
      spec: {
        url: '/doc',
      },
    }),
  );
}
