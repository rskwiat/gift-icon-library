import { promises as fs } from 'node:fs';
import path from 'node:path';
import { v4 as uuidv4 } from 'uuid';

export const images = new Set<{
  id: number;
  uuid: string;
  path: string;
  name: string;
}>();
let nextId = 1;

export const setImages = async () => {
  try {
    if (images.size > 0) {
      return;
    }

    const imagesDir = path.join(__dirname, '../../public/images');
    const files = await fs.readdir(imagesDir);

    const imageFiles = files.filter((file) =>
      /\.(jpg|jpeg|png|gif|svg)$/.test(file),
    );

    for (const file of imageFiles) {
      images.add({
        id: nextId,
        uuid: uuidv4(),
        name: file,
        path: `/api/images/${file}`,
      });
      nextId++;
    }
  } catch (error) {
    console.error(`Error reading images directory: ${JSON.stringify(error)}`);
  }
};

export const getImageByUUID = (uuid: number) => {
  for (const image of images) {
    if (image.id === uuid) {
      return image;
    }
  }
  return null;
};
