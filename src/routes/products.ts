import { Product } from './../model/Product';
import { Category } from './../model/Category';
import { RequestHandler } from 'express';
import { TEST_NONEXISTING_UUID } from '../config';
import { cleanupResponse } from '../utils/cleanupResponse';
import { countProductScore, insertProductScore } from '../utils/countScore';

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
            const products = (await Promise.all(
                (await Product.query()
                    .eager('[category,productIngredients.ingredient]')
                    .where('category_id', category.id)
                    //.joinRelation('productIngredients')
                    /*.whereNot(function() {
                    this.whereIn('productIngredients.ingredient_name', filterIngredients);
                })*/
                    //.limit(5)

                    .select()).map((product) => insertProductScore(product)),
            )).sort((a, b) => (a.score > b.score ? 1 : -1));

            res.status(200).json(
                products
                    .filter((product: any) => {
                        if (product.productIngredients.length === 0) return false;

                        //todo this should be done by sql query not aplication
                        for (const { ingredient_name } of product.productIngredients) {
                            if ((filterIngredients || []).includes(ingredient_name)) return false;
                        }
                        return true;
                    })
                    .slice(0, 5)
                    .map(cleanupResponse),
            );
        }
    } catch (error) {
        next(error);
    }
};
