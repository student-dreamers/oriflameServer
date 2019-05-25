import { AbstractModel } from './AbstractModel';

export class Product extends AbstractModel {
    static tableName = 'data_product';
    static idColumn = 'id';

    readonly id: number;
    uuid: string;
    name: string;
    url_icon: string;

    constructor(raw: Partial<Product> = {}) {
        super();
        Object.assign(this, raw);
    }
}
