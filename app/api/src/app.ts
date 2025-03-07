import configureOpenApi from './lib/configure-open-api';
import createApp from './lib/create-app';

import index from './routes';
import allIcons from './routes/all-icons/all-icons';

const app = createApp();
configureOpenApi(app);

const routes = [index, allIcons];

for (const route of routes) {
  app.route('/', route);
}

// app.get('/icon/:uuid', (c) => {
//   const { uuid } = c.req.param();
//   const image = getImageByUUID(uuid);

//   if (image) {
//     return c.json(image, 200);
//   } else {
//     return c.json({ error: 'Image not found' }, 404);
//   }
// });

export default app;
