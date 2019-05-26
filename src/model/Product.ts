import { Category } from './Category';
import { AbstractModel } from './AbstractModel';
import { RelationMappings, Model } from 'objection';
import { ProductIngredient } from './ProductIngredient';

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

    //joined
    category: Category;
    productIngredients: ProductIngredient[];

    //computed
    score: number;

    constructor(raw: Partial<Product> = {}) {
        super();
        Object.assign(this, raw);
    }

    static relationMappings: RelationMappings = {
        category: {
            relation: Model.HasOneRelation,
            modelClass: 'Category',
            join: {
                from: 'data_product.category_id',
                to: 'data_category.id',
            },
        },
        productIngredients: {
            relation: Model.HasManyRelation,
            modelClass: 'ProductIngredient',
            join: {
                from: 'data_product.id',
                to: 'data_product_ingredient.product_id',
            },
        },
    };
}
