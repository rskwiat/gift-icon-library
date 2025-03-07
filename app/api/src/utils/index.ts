import { promises as fs } from 'node:fs';
import path from 'node:path';
import { v4 as uuidv4 } from 'uuid';

export const images = new Set<{ id: string; name: string }>();

export const setImages = async () => {
  try {
    const imagesDir = path.join(__dirname, '../../public/images');
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
    console.error(`Error reading images directory: ${JSON.stringify(error)}`);
  }
};

export const getImageByUUID = (uuid: string) => {
  for (const image of images) {
    if (image.id === uuid) {
      return image;
    }
  }
  return null;
};
