import { Box } from './Box.js';

export class ProductBox extends Box {
    constructor(rootElement, product, category) {
        super(rootElement);
        this.product = product;
        this.category = category;
    }

    async render() {
        super.render();
        console.log(this.product, 'this.product');
        this.rootElement.classList.add('product');
        this.rootElement.style.background = `url(${this.product.url_image})`;
        this.rootElement.style.backgroundSize = 'contain';
        this.rootElement.style.backgroundRepeat = 'no-repeat';
        this.rootElement.style.backgroundPosition = 'center bottom';

        this.rootElement.innerHTML = `
            <a href="${this.product.url_shop}" target="_blank">
                <div  class="details">
                    <h2>${this.product.name}</h2>
                    <h3>Kategorie: ${this.product.category.name}</h3>
                    <h3>${Math.floor(this.product.score * 100)}% Škodlivosti</h3>
                    <h3>${this.product.price},- Kč</h3>
                </div>
            </a>
        `;
    }
}
