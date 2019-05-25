import { Product } from './../model/Product';
import { Category } from './../model/Category';
import { RequestHandler } from 'express';
import { TEST_NONEXISTING_UUID } from '../config';

export const productsRouteHandler: RequestHandler = async (req, res, next) => {
    try {
        const { categoryUuid } = req.params;
        const { ingrediences } = req.query;

        console.log('categoryUuid', categoryUuid);
        console.log('ingrediences', ingrediences);

        const [category] = await Category.query()
            .where('uuid', categoryUuid)
            .select();

        console.log('category', category);

        if (!category) {
            res.status(404).send(`Category do not exists.`);
        } else {
            const products = await Product.query()
                .where('category_id', category.id)
                .select();

            res.status(200).json(products);
        }
    } catch (error) {
        next(error);
    }
};
