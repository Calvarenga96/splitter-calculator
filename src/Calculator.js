export default class Calculator {
	constructor({ custom, bill, people, tip }) {
		this.tip = tip;
		this.custom = custom;
		this.bill = bill;
		this.people = people;
	}

	calculateTip() {
		let totalTip;
		let tipPerPerson;
		if (this.tip !== undefined) {
			totalTip = (this.bill * this.tip) / 100;
		}
	}

	calculateTotal() {}

	calculate() {
		this.calculateTip();
		this.calculateTotal();
	}
}
