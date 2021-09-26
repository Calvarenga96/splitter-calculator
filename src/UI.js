export default class UI {
	constructor({ tip, total }) {
		this.tip = tip;
		this.total = total;
	}

	render() {
		this.renderTip();
		this.renderTotal();
	}

	renderTip() {
		const renderTip = document.querySelector("#mount-tip");
		renderTip.innerText = `$${this.tip}`;
	}

	renderTotal() {
		const renderTotal = document.querySelector("#mount-total");
		renderTotal.innerText = `$${this.total}`;
	}

	resetButton() {
		this.tip = "0.00";
		this.total = "0.00";
		this.render();
	}

	static messageNoZero() {
		const message = document.querySelector("#zero");
		message.textContent = "Can't be zero";
	}

	static noMessage() {
		const message = document.querySelector("#zero");
		message.innerText = "";
	}
}
