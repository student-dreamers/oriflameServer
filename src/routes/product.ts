import { Product } from './../model/Product';
import { RequestHandler } from 'express';
import { cleanupResponse } from '../utils/cleanupResponse';
import { countProductScore } from '../utils/countScore';

export const productRouteHandler: RequestHandler = async (req, res, next) => {
    try {
        const { productUuidOrEan } = req.params;

        const [product] = await Product.query()
            .where('uuid', productUuidOrEan)
            .orWhere('ean', productUuidOrEan)
            .eager('[category,productIngredients.ingredient]')
            .select();

        if (!product) {
            res.status(404).send(`Product with UUID or EAN "${productUuidOrEan}" do not exists.`);
        } else {
            product.score = await countProductScore(product);
            res.status(200).json(cleanupResponse(product));
        }
    } catch (error) {
        next(error);
    }
};
