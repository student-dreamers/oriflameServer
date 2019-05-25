import * as request from 'supertest';
import { app } from '../src/app';

export default describe('Categories route', () => {
    it('should get correct categories', () =>
        request(app)
            .get(`/categories`)
            .expect(200)
            .expect(({ body }) => {
                if (!(body instanceof Array)) throw new Error(`Not Array`);
                for (const item of body) {
                    if (!('name' in item)) throw new Error(`Missing name`);
                    if (!('uuid' in item)) throw new Error(`Missing uuid`);
                    if (!('url_icon' in item)) throw new Error(`Missing url_icon`);
                }
            }));
});
