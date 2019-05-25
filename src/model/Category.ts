import { AbstractModel } from './AbstractModel';

export class Category extends AbstractModel {
    static tableName = 'data_category';
    static idColumn = 'id';

    readonly id: number;
    uuid: string;
    name: string;
    url_icon: string;

    constructor(raw: Partial<Category> = {}) {
        super();
        Object.assign(this, raw);
    }
}
