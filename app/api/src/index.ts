import app from './app';
declare module 'bun' {
  interface Env {
    PORT: string;
    ENV: string;
    LOG_LEVEL: string;
    APP_URL: string;
  }
}

export default {
  port: process.env.PORT,
  fetch: app.fetch,
};
