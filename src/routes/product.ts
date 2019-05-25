import { RequestHandler } from 'express';

export const productRouteHandler:RequestHandler = async (req, res, next) => {
    try {
        res.status(200).json({
           
        });
        
    } catch (error) {
        next(error);
    }
};