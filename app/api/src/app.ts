import configureOpenApi from './lib/configure-open-api';
import createApp from './lib/create-app';

import index from './routes';
import allIcons from './routes/all-icons/all-icons';
import icon from './routes/icon/icon';

const app = createApp();
configureOpenApi(app);

const routes = [index, allIcons, icon];

for (const route of routes) {
  app.route('/', route);
}

export default app;
