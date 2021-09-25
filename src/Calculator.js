import UI from "./UI.js";

export default class Calculator {
	constructor({ bill, people, tip }) {
		this.bill = bill;
		this.tip = tip;
		this.people = people;
	}

	calculateTip() {
		if (!this.bill || !this.tip || !this.people) {
			return "0.00";
		} else {
			const tip = (this.bill * this.tip) / 100;
			const tipPerPerson = tip / this.people;
			return tipPerPerson.toFixed(2);
		}
	}

	calculateTotal() {
		if (!this.bill || !this.tip || !this.people) {
			return "0.00";
		} else {
			const total = (this.bill * this.tip) / 100 + this.bill;
			const totalPerPerson = total / this.people;
			return totalPerPerson.toFixed(2);
		}
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
