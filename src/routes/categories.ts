import { Category } from './../model/Category';
import { RequestHandler } from 'express';

export const categoriesRouteHandler: RequestHandler = async (req, res, next) => {
    try {
        const categories = await Category.query().select();

        res.status(200).json(categories);
    } catch (error) {
        next(error);
    }
};
