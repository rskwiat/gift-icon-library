import { pinoLogger } from 'hono-pino';
import env from '../env';
export function Logger() {
  const isProduction = env.NODE_ENV === 'production';

  const config = {
    pino: {
      level: isProduction ? 'debug' : env.LOG_LEVEL || 'info',
      ...(isProduction
        ? {}
        : {
            transport: {
              target: 'pino-pretty',
            },
          }),
    },
    http: {
      reqId: () => crypto.randomUUID(),
    },
  };

  return pinoLogger(config);
}
