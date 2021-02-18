export class ListTemplate {
    constructor(container) {
        this.container = container;
    }
    render(item, heading, pos) {
        const liLi = document.createElement("li");
        const h4Li = document.createElement("h4");
        h4Li.innerText = heading;
        liLi.append(h4Li);
        const pLi = document.createElement("p");
        pLi.innerText = item.format();
        liLi.append(pLi);
        if (pos === "start") {
            this.container.prepend(liLi);
        }
        else {
            this.container.append(liLi);
        }
    }
}
