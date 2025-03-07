import * as HttpStatusCodes from '../../constants/status-codes';
import type { AppRouteHandler } from '../../lib/types';
import { images, setImages } from '../../utils';

import type { AllIconsRoute } from './all-icons.routes';

export const allIcons: AppRouteHandler<AllIconsRoute> = async (c) => {
  await setImages();
  return c.json(Array.from(images), HttpStatusCodes.OK);
};
