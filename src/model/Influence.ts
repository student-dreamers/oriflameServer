import { Model, RelationMappings } from 'objection';
import { AbstractModel } from './AbstractModel';

export class Influence extends AbstractModel {
    static tableName = 'influence';
    static idColumn = 'id';

    readonly id: number;
    name: string;
    description: string;
    score: number;

    constructor(raw: Partial<Influence> = {}) {
        super();
        Object.assign(this, raw);
    }

    static relationMappings: RelationMappings = {
        ingredientInfluence: {
            relation: Model.HasManyRelation,
            modelClass: 'IngredientInfluence',
            join: {
                from: 'ingredient_influence.influence_id',
                to: 'influence.id',
            },
        },
    };
}
