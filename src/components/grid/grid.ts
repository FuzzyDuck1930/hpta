import square from "../square/square";

class grid extends HTMLElement {
    private squares: HTMLElement[] = [];

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
                <style>
                    .grid {
                        display: grid;
                        grid-template-columns: repeat(8, 50px);
                        grid-template-rows: repeat(8, 50px);
                    }
                </style>
            `;
            const theGrid = this.ownerDocument.createElement("div");
            theGrid.classList.add("grid");
            for (let row = 1; row <= 8; row++) {
                for (let col = 1; col <= 8; col++) {
                    const square = document.createElement("the-square");
                    square.dataset.clicked = "false";
                    this.squares.push(square);
                    square.addEventListener("click", () => {
                        this.paintAllSquares();
                    });
                    theGrid.appendChild(square);
                }
            }
            this.shadowRoot?.appendChild(theGrid);
        }
    }

    paintAllSquares() {
        const moreEffingSquares = this.squares.slice().sort(() => Math.random() - 0.5);
        let redSquareCount = 0;
        for (const square of moreEffingSquares) {
            if (redSquareCount < 10 && square.dataset.clicked !== "true") {
                square.style.backgroundColor = "#F28B30";
                square.dataset.clicked = "true";
                redSquareCount++;
            } else {
                square.style.backgroundColor = "#262559";
                square.dataset.clicked = "true";
            }
        }
    }
}

customElements.define("the-grid", grid);
export default grid;