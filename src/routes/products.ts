import { Product } from './../model/Product';
import { Category } from './../model/Category';
import { RequestHandler } from 'express';
import { TEST_NONEXISTING_UUID } from '../config';
import { cleanupResponse } from '../utils/cleanupResponse';

export const productsRouteHandler: RequestHandler = async (req, res, next) => {
    try {
        const { categoryUuid } = req.params;
        const { filterIngredients } = req.query;

        const [category] = await Category.query()
            .where('uuid', categoryUuid)
            .select();

        console.log('category', category);

        if (!category) {
            res.status(404).send(`Category do not exists.`);
        } else {
            const products = await Product.query()
                .eager('category')
                .eager('productIngredients')
                .eager('productIngredients.ingredient')
                .where('category_id', category.id)
                .select();

            res.status(200).json(products.map(cleanupResponse));
        }
    } catch (error) {
        next(error);
    }
};
