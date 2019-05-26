export class Box {
    constructor(rootElement) {
        this.rootElement = rootElement;
        requestAnimationFrame(() => {
            this.render();
        });
    }

    async render() {
        this.rootElement.classList.add('box');
        this.rootElement.innerHtml = 'Loading...';
    }

    createElement() {
        const element = document.createElement('div');
        this.rootElement.appendChild(element);
        return element;
    }
}
