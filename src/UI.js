export default class UI {
	constructor({ tip, total, people }) {
		this.tip = tip;
		this.total = total;
		this.people = people;
	}

	render() {
		this.renderTip();
		this.renderTotal();
	}

	renderTip() {
		const renderTip = document.querySelector("#mount-tip");
		renderTip.textContent = `$${this.tip}`;
	}

	renderTotal() {
		const renderTotal = document.querySelector("#mount-total");
		renderTotal.textContent = `$${this.total}`;
	}

	static zero() {
		const message = document.querySelector("#zero");
		message.textContent = "Can't be zero";
	}
}
