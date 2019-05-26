export class Box {
    constructor(rootElement) {
        this.rootElement = rootElement;
        setImmediate(() => {
            this.render();
        });
    }

    render() {
        //this.rootElement.innerHtml = 'Box';
    }

    createElement() {
        const element = document.createElement('div');
        this.rootElement.appendChild(element);
        return element;
    }
}
