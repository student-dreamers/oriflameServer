import { AbstractModel } from './AbstractModel';
import { Ingredient } from './Ingredient';
import { Influence } from './Influence';
import { RelationMappings, Model } from 'objection';

export class IngredientInfluence extends AbstractModel {
    static tableName = 'ingredient_influence';
    static idColumn = 'id';

    ingredient_name: string;
    influence_id: number;
    score: number;

    //joined
    ingredient: Ingredient;
    influence: Influence;

    constructor(raw: Partial<IngredientInfluence> = {}) {
        super();
        Object.assign(this, raw);
    }

    static relationMappings: RelationMappings = {
        ingredient: {
            relation: Model.HasOneRelation,
            modelClass: 'Ingredient',
            join: {
                from: 'ingredient_influence.ingredient_name',
                to: 'ingredient.name',
            },
        },
        influence: {
            relation: Model.HasOneRelation,
            modelClass: 'Influence',
            join: {
                from: 'ingredient_influence.influence_id',
                to: 'influence.id',
            },
        },
    };
}
