import { api } from './Api.js';
import { Box } from './Box.js';

async class VisualizationBox extends Box{

    render(){
        for (const category of await api.getCategories()) {

            const categoryBox = new Box(this.createElement());

            for (const product of await api.getCategoryProducts(category.uuid)) {

                const productBox = new ProductBox(categoryBox.createElement(),product);


               

            }
        }
    }




}
