class Dashboard extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}

	render() {
		if (this.shadowRoot) this.shadowRoot.innerHTML = '';
		const whole = this.ownerDocument.createElement("the-grid")
		this.shadowRoot?.appendChild(whole)
	}
}

customElements.define('app-dashboard', Dashboard);