import UI from "./UI.js";

export default class Calculator {
	constructor({ bill, people, tip }) {
		this.tip = tip;
		this.bill = bill;
		this.people = people;
	}

	calculateTip() {
		const tip = (this.bill * this.tip) / 100;
		const tipPerPerson = tip / this.people;
		return tipPerPerson.toFixed(2);
	}

	calculateTotal() {
		const total = (this.bill * this.tip) / 100 + this.bill;
		const totalPerPerson = total / this.people;
		return totalPerPerson.toFixed(2);
	}

	calculate() {
		this.calculateTip();
		this.calculateTotal();
		this.renderUI();
	}

	renderUI() {
		const ui = new UI({
			tip: this.calculateTip(),
			total: this.calculateTotal(),
		});
		ui.render();
	}
}
