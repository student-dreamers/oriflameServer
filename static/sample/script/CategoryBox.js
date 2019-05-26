import { Box } from './Box.js';

export class CategoryBox extends Box {
    constructor(rootElement, category) {
        super(rootElement);
        this.category = category;
    }

    async render() {
        super.render();
        this.rootElement.classList.add('category');
        /*this.rootElement.innerHTML = `
            
            <h1>${this.category.name}</h1>

        
        `;*/
    }
}
