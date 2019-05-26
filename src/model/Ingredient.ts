import { Model, RelationMappings } from 'objection';
import { AbstractModel } from './AbstractModel';
import { IngredientInfluence } from './IngredientInfluence';

export class Ingredient extends AbstractModel {
    static tableName = 'ingredient';
    //static idColumn = 'id';

    //readonly id: number;
    name: string;
    url_icon: string;
    featured: boolean;

    //joined
    ingredientInfluences: IngredientInfluence[];

    //computed
    score: number;

    constructor(raw: Partial<Ingredient> = {}) {
        super();
        Object.assign(this, raw);
    }

    static relationMappings: RelationMappings = {
        ingredientInfluences: {
            relation: Model.HasManyRelation,
            modelClass: 'IngredientInfluence',
            join: {
                from: 'ingredient_influence.ingredient_name',
                to: 'ingredient.name',
            },
        },
    };
}
