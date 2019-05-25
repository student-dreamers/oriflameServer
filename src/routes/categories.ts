import { Category } from './../model/Category';
import { RequestHandler } from 'express';
import { cleanupResponse } from '../utils/cleanupResponse';

export const categoriesRouteHandler: RequestHandler = async (req, res, next) => {
    try {
        const categories = await Category.query().select();

        res.status(200).json(categories.map(cleanupResponse));
    } catch (error) {
        next(error);
    }
};
