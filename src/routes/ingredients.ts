import { RequestHandler } from 'express';
import { cleanupResponse } from '../utils/cleanupResponse';
import { Ingredient } from '../model/Ingredient';
import { getIngredientsWithScore } from '../utils/getIngredientsWithScore';

export const ingredientsRouteHandler: RequestHandler = async (req, res, next) => {
    try {
        res.status(200).json((await getIngredientsWithScore()).map(cleanupResponse));
    } catch (error) {
        next(error);
    }
};
