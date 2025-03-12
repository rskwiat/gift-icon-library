import { pinoLogger } from 'hono-pino';
export function Logger() {
  const isProduction = process.env.ENV === 'production';

  const config = {
    pino: {
      level: isProduction ? 'debug' : process.env.LOG_LEVEL || 'info',
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
