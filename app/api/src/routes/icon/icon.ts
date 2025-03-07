import { createRouter } from '../../lib/create-app';

import * as handlers from './icon.handlers';
import * as routes from './icon.routes';

const router = createRouter().openapi(routes.singleIcon, handlers.singleIcon);

export default router;
