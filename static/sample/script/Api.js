export class Api {
    constructor(apiUrl) {
        this.apiUrl = apiUrl;

        this.getVersion().then(({ version }) => {
            console.log(`Working with API version ${version}.`);
        });
    }

    getVersion() {
        return this._fetchResource(`/about`);
    }

    getIngredientes() {
        return this._fetchResource(`/Ingredients`);
    }

    getCategories() {
        return this._fetchResource(`/categories`);
    }

    getProductByUuidOrEan(uuidOrEan) {
        return this._fetchResource(`/products/${uuidOrEan}`);
    }

    getCategoryProducts(category, filterIngredients = []) {
        const queryString = filterIngredients
            .map((filterIngredient) => `filterIngredients[]=${encodeURIComponent(filterIngredients)}`)
            .join('&');
        return this._fetchResource(`/categories/${category}/products${queryString ? `?${queryString}` : ''}`);
    }

    async _fetchResource(path) {
        const response = await fetch(`${this.apiUrl}${path}`);
        if (response.status !== 200)
            throw new Error(`Not loaded "${this.apiUrl}" - http status code ${response.status}.`);

        return await response.json();
    }
}

export const api = new Api(`http://138.197.181.210:8090`); //todo to config
