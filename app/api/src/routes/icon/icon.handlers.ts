import * as HttpStatusCodes from '../../constants/status-codes';
import type { AppRouteHandler } from '../../lib/types';
import { getImageByUUID, images } from '../../utils';

import type { SingleIconRoute } from './icon.routes';

export const singleIcon: AppRouteHandler<SingleIconRoute> = async (c) => {
  const { id } = c.req.valid('param');
  const image = getImageByUUID(id);

  if (image) {
    return c.json(image, 200);
  }

  return c.json({ message: 'Icon not found' }, HttpStatusCodes.NOT_FOUND);
};
