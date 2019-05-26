import { Box } from './Box.js';

async class ProductnBox extends Box{

    constructor(rootElement,product) {
        super(rootElement);
        this.product = product;
    }

    render(){
        this.targetElement.innerHTML = `
            
            <h1>${product.name}</h1>
        
        `;
    }

}
