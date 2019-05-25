import * as request from 'supertest';
import { app } from '../src/app';

export default describe('Ingredients route', () => {
    it('should get correct Ingredients', () =>
        request(app)
            .get(`/Ingredients`)
            .expect(200)
            .expect(({ body }) => {
                if (!(body instanceof Array)) throw new Error(`Not Array`);
                for (const item of body) {
                    if (!('name' in item)) throw new Error(`Missing name`);
                    if (!('url_icon' in item)) throw new Error(`Missing url_icon`);
                    if (!('featured' in item)) throw new Error(`featured url_icon`);
                }
            }));
});
