import * as request from 'supertest';
import { app } from '../src/app';
import { TEST_EXISTING_CATEGORY_UUID, TEST_NONEXISTING_UUID } from '../src/config';

export default describe('Products route', () => {
    it('should not get product of non-existing category', () =>
        request(app)
            .get(`/products/${TEST_NONEXISTING_UUID}`)
            .expect(404));

    it('should get product of category', () =>
        request(app)
            .get(`/categories/${TEST_EXISTING_CATEGORY_UUID}/products`)
            .expect(200)
            .expect(({ body }) => {
                if (!(body instanceof Array)) throw new Error(`Not Array`);
                for (const item of body) {
                    if (!('name' in item)) throw new Error(`Missing name`);
                    if (!('uuid' in item)) throw new Error(`Missing uuid`);
                    if (!('url_image' in item)) throw new Error(`Missing url_image`);
                }
            }));
});
