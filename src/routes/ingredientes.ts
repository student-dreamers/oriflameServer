import { RequestHandler } from 'express';
import { cleanupResponse } from '../utils/cleanupResponse';
import { Ingredient } from '../model/Ingredient';

export const ingredientesRouteHandler: RequestHandler = async (req, res, next) => {
    try {
        const Ingredients = await Ingredient.query().select();

        res.status(200).json(Ingredients.map(cleanupResponse));
    } catch (error) {
        next(error);
    }
};
