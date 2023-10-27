class square extends HTMLElement {

constructor(){
    super();
    this.attachShadow({mode: "open"});
}

connectedCallback(){
    this.render();
}

    render(){
            if (this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <style>
            .Mine{
            width: 50px;
            height: 50px;
            border-style: solid;
            border-color: rgb(94, 94, 94);
            }
            </style>
            `;
            const mine = this.ownerDocument.createElement("div")
            mine.classList.add("Mine")
            this.shadowRoot?.appendChild(mine);
        }
    }
}

customElements.define("the-square", square);
export default square;