import { AbstractModel } from './AbstractModel';

export class Ingredient extends AbstractModel {
    static tableName = 'ingredient';
    //static idColumn = 'id';

    //readonly id: number;
    name: string;
    url_icon: string;
    featured: boolean;

    constructor(raw: Partial<Ingredient> = {}) {
        super();
        Object.assign(this, raw);
    }
}
