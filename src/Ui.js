export default class Ui {
	constructor({ tip, total }) {
		this.tip = tip;
		this.total = total;
	}

	render() {
		this.renderTip();
		/* this.renderTotal(); */
	}

	renderTip() {
		const renderTip = document.querySelector("mount-tip");
		renderTip.innerText = `$ ${this.tip}`;
	}
}
