import UI from "./Ui.js";

export default class Calculator {
	constructor({ custom, bill, people, tip }) {
		this.tip = tip;
		this.custom = custom;
		this.bill = bill;
		this.people = people;
	}

	calculateTip() {
		let tip, tipPerPerson;
		if (this.tip) {
			tip = (this.bill * this.tip) / 100;
			tipPerPerson = tip / this.people;
		}
		if (this.custom) {
			tip = (this.bill * this.custom) / 100;
			tipPerPerson = tip / this.people;
		}
		return tipPerPerson;
	}

	calculateTotal() {
		let total, totalPerPerson;
		if (this.tip) {
			total = (this.bill * this.tip) / 100 + this.bill;
			totalPerPerson = total / this.people;
		}
		if (this.custom) {
			total = (this.bill * this.custom) / 100 + this.bill;
			totalPerPerson = total / this.people;
		}
		return totalPerPerson;
	}

	calculate() {
		this.calculateTip();
		this.calculateTotal();
		const ui = new UI({
			tip: this.calculateTip,
			total: this.calculateTotal,
		});
		ui.render();
	}
}
