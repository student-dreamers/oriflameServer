import { Box } from './Box.js';

export class ProductBox extends Box {
    constructor(rootElement, product) {
        super(rootElement);
        this.product = product;
    }

    async render() {
        this.rootElement.innerHTML = `
            
            <h1>${this.product.name}</h1>
        
        `;
    }
}
