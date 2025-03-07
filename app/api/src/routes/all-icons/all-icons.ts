import { createRouter } from '../../lib/create-app';

import * as handlers from './all-icons.handlers';
import * as routes from './all-icons.routes';

const router = createRouter().openapi(routes.allIcons, handlers.allIcons);

export default router;
