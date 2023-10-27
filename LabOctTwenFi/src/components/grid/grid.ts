import square from "../square/square";

class grid extends HTMLElement {
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
            gap: 1px;
            }
                </style>
            `;
            const theGrid = this.ownerDocument.createElement("div");
            theGrid.classList.add("grid")
            for (let row = 1; row <= 8; row++) {
                for (let col = 1; col <= 8; col++) {
                    const square = document.createElement("the-square");
                    square.textContent = `(${row}, ${col})`;
                    square.addEventListener("click", () => {
                        if (square.dataset.clicked !== "true") {
                            const randomId = Math.floor(Math.random() * 2); // Genera una ID aleatoria 0 o 1
                            square.textContent = `(${row}, ${col}, ID: ${randomId})`;

                            if (randomId === 0) {
                                square.style.backgroundColor = "red"; // Cambia el color a rojo si la ID es 0
                            } else {
                                square.style.backgroundColor = "blue"; // Cambia el color a azul si la ID es 1
                            }

                            // Establece la propiedad "clicked" en "true" para indicar que el botón ha sido clicado
                            square.dataset.clicked = "true";
                        }
                    });

                    theGrid.appendChild(square);
                }
            }
            this.shadowRoot?.appendChild(theGrid);
        }
    }
}

customElements.define("the-grid", grid);
export default grid;