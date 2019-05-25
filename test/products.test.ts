import * as request from 'supertest';
import { app } from '../src/app';
import { TEST_CATEGORY_UUID, TEST_NONEXISTING_UUID, TEST_INGREDIENT_UUID } from '../src/config';

export default describe('Products route', () => {
    it('should not get products from non-existing category', () =>
        request(app)
            .get(`/categories/${TEST_NONEXISTING_UUID}/products`)
            .expect(404));

    it('should get products from a category', () =>
        request(app)
            .get(`/categories/${TEST_CATEGORY_UUID}/products`)
            .expect(200)
            .expect(({ body }) => {
                if (!(body instanceof Array)) throw new Error(`Not Array`);
                //todo check score order
                for (const item of body) {
                    if (!('name' in item)) throw new Error(`Missing name`);
                    if (!('uuid' in item)) throw new Error(`Missing uuid`);
                    if (!('score' in item)) throw new Error(`Missing score`);
                    if (!('url_image' in item)) throw new Error(`Missing url_image`);
                }
            }));

    it('should not get products from a category and filter some non-existing ingredients', () =>
        request(app)
            .get(
                `/categories/${TEST_CATEGORY_UUID}/products?filterIngredients=${TEST_NONEXISTING_UUID},${TEST_INGREDIENT_UUID}`,
            )
            .expect(404));

    it('should get products from a category and filter some ingredients', () =>
        request(app)
            .get(
                `/categories/${TEST_CATEGORY_UUID}/products?filterIngredients=${TEST_INGREDIENT_UUID},${TEST_INGREDIENT_UUID}`,
            )
            .expect(200));
    //todo check if the ingredient is not in list of products
});
