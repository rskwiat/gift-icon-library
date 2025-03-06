import { createRouter } from '../lib/create-app';

import * as handlers from './index.handlers';
import * as routes from './index.routes';

const router = createRouter().openapi(routes.healthcheck, handlers.healthcheck);

export default router;
