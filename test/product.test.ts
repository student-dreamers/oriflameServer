import * as request from 'supertest';
import { app } from '../src/app';
import { TEST_PRODUCT_UUID, TEST_NONEXISTING_UUID, TEST_PRODUCT_EAN } from '../src/config';

export default describe('Product route', () => {
    it('should not get non-existing product by uuid', () =>
        request(app)
            .get(`/products/${TEST_NONEXISTING_UUID}`)
            .expect(404));

    it('should get existing product by uuid', () =>
        request(app)
            .get(`/products/${TEST_PRODUCT_UUID}`)
            .expect(200));

    it('should get correct existing product by ean', () =>
        request(app)
            .get(`/products/${TEST_PRODUCT_EAN}`)
            .expect(200)
            .expect(({ body }) => {
                if ('id' in body) throw new Error(`Id is private`);
                if (!('name' in body)) throw new Error(`Missing name`);
                if (!('uuid' in body)) throw new Error(`Missing uuid`);
                if (!('url_image' in body)) throw new Error(`Missing url_image`);
                if (!('price' in body)) throw new Error(`Missing price`);
                if (!('ingrediences' in body)) throw new Error(`Missing ingrediences`);
            }));
});
