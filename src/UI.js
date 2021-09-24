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
		if (!this.tip || this.tip === Infinity) {
			renderTip.textContent = "$0.00";
		} else if (this.tip || this.tip !== Infinity) {
			renderTip.textContent = `$${this.tip}`;
		}
	}

	renderTotal() {
		const renderTotal = document.querySelector("#mount-total");
		if (!this.total || this.tip === Infinity) {
			renderTotal.textContent = "$0.00";
		} else {
			renderTotal.textContent = `$${this.total}`;
		}
	}

	static messageNoZero() {
		const message = document.querySelector("#zero");
		message.textContent = "Can't be zero";
	}

	static noMessage() {
		const message = document.querySelector("#zero");
		message.textContent = "";
	}
}
