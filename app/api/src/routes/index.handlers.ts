import type { AppRouteHandler } from '../lib/types';
import type { HealthCheckRoute } from './index.routes';

import { HEALTHCHECK_MESSAGE } from '../constants/constants';
import * as HttpStatusCodes from '../constants/status-codes';

export const healthcheck: AppRouteHandler<HealthCheckRoute> = async (c) => {
  return c.json(
    {
      message: HEALTHCHECK_MESSAGE.OK,
    },
    HttpStatusCodes.OK,
  );
};
