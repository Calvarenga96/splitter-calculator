export default class Calculator {
	constructor({ custom, bill, people, tip }) {
		this.tip = tip;
		this.custom = custom;
		this.bill = Number(bill);
		this.people = people;
	}

	calculateTip() {
		let totalTip;
		let tipPerPerson;
		if (this.tip) {
			totalTip = (this.bill * this.tip) / 100;
		}
		console.log(totalTip);
	}

	calculateTotal() {}

	calculate() {
		this.calculateTip();
		this.calculateTotal();
	}
}
