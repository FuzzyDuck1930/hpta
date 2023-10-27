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
            width: 45px;
            height: 45px;
            border-style: solid;
            border-color: #130B26;
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