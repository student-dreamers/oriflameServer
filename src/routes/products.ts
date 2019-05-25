import { RequestHandler } from 'express';
import { TEST_NONEXISTING_UUID } from '../config';

export const productsRouteHandler: RequestHandler = async (req, res, next) => {
    try {
        const { category } = req.params;

        if (TEST_NONEXISTING_UUID) {
            res.status(404).json({});
        } else {
            res.status(200).json([]);
        }
    } catch (error) {
        next(error);
    }
};
