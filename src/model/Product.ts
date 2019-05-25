import { Category } from './Category';
import { AbstractModel } from './AbstractModel';
import { RelationMappings, Model } from 'objection';

export class Product extends AbstractModel {
    static tableName = 'data_product';
    static idColumn = 'id';

    readonly id: number;
    uuid: string;
    ean: string;
    category_id: number;
    name: string;
    description: string;
    url_image: string;
    url_shop: string;
    price: number;
    score = 1; //todo mock

    constructor(raw: Partial<Product> = {}) {
        super();
        Object.assign(this, raw);
    }

    static relationMappings: RelationMappings = {
        category: {
            relation: Model.HasOneRelation,
            modelClass: 'Category',
            join: {
                from: 'data_category.id',
                to: 'data_product.category_id',
            },
        },
    };
}
