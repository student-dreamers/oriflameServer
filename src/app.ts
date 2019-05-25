import { json } from 'body-parser';
import * as path from 'path';
import * as cors from 'cors';
import * as express from 'express';
import { expressLogger } from './utils/logger';
import { logMiddleware } from './utils/logMiddleware';

import { initDBConnection } from './knex';
import { productRouteHandler } from './routes/product';
import { aboutRouteHandler } from './routes/about';
import { categoriesRouteHandler } from './routes/categories';

export const app = createApp();

export function createApp(): express.Express {
    initDBConnection(); //todo better

    const app = express();

    app.use(json({ limit: '50mb' }));
    app.use(cors());
    app.use(expressLogger());
    app.set('json spaces', 4);

    app.use(logMiddleware);

    app.use(express.static(path.join(__dirname, '..', 'static')));

    app.get(['/', '/about'], aboutRouteHandler);
    app.get('/products', productRouteHandler);

    app.get('/categories', categoriesRouteHandler);

    return app;
}