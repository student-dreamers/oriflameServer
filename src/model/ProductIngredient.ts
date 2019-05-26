import { Category } from './Category';
import { AbstractModel } from './AbstractModel';
import { RelationMappings, Model } from 'objection';
import { Ingredient } from './Ingredient';

export class ProductIngredient extends AbstractModel {
    static tableName = 'data_product_ingredient';
    //static idColumn = 'id';

    //readonly id: number;
    product_id: number;
    ingredient_name: string;
    amount: number;
    order: number;

    //joined
    ingredient: Ingredient;

    constructor(raw: Partial<ProductIngredient> = {}) {
        super();
        Object.assign(this, raw);
    }

    static relationMappings: RelationMappings = {
        ingredient: {
            relation: Model.HasOneRelation,
            modelClass: 'Ingredient',
            join: {
                from: 'data_product_ingredient.ingredient_name',
                to: 'ingredient.name',
            },
        },
    };
}
