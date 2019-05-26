import { api } from './Api.js';
import { Box } from './Box.js';
import { ProductBox } from './ProductBox.js';
import { CategoryBox } from './CategoryBox.js';

export class VisualizationBox extends Box {
    async render() {
        this.rootElement.classList.add('visualization');
        for (const category of await api.getCategories()) {
            const categoryBox = new CategoryBox(this.createElement(), category);

            for (const product of await api.getCategoryProducts(category.uuid)) {
                const productBox = new ProductBox(categoryBox.createElement(), product);
            }
        }
    }
}
