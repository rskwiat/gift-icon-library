import configureOpenApi from './lib/configure-open-api';
import createApp from './lib/create-app';

import { v4 as uuidv4 } from 'uuid';

// biome-ignore lint/style/useNodejsImportProtocol: <explanation>
import { promises as fs } from 'fs';

import index from './routes';

const app = createApp();
configureOpenApi(app);

const routes = [index];

for (const route of routes) {
  app.route('/', route);
}

const images = new Set<{ id: string; name: string }>();

const setImages = async () => {
  try {
    const imagesDir = path.join(__dirname, '../public/images');
    const files = await fs.readdir(imagesDir);

    const imageFiles = files.filter((file) =>
      /\.(jpg|jpeg|png|gif|svg)$/.test(file),
    );

    for (const file of imageFiles) {
      images.add({
        id: uuidv4(),
        name: file,
      });
    }
  } catch (error) {
    console.error(`Error reading images directory: ${error.message}`);
  }
};

const getImageByUUID = (uuid: string) => {
  for (const image of images) {
    if (image.id === uuid) {
      return image;
    }
  }
  return null;
};

app.get('/', (c) => {
  return c.text('Hello Hono!');
});

app.get('/all-icons', async (c) => {
  await setImages();
  return c.json(Array.from(images));
});

app.get('/icon/:uuid', (c) => {
  const { uuid } = c.req.param();
  const image = getImageByUUID(uuid);

  if (image) {
    return c.json(image, 200);
  } else {
    return c.json({ error: 'Image not found' }, 404);
  }
});

export default app;
