import { tipValues } from "./values.js";

export default class Calculator {
	constructor({ custom, bill, people }) {
		this.custom = custom;
		this.bill = bill;
		this.people = people;
	}

	calculateTip() {
		let tip;
		if (this.bill) {
			tip = (this.bill * tipValues) / 100;
		}
		console.log(tip);
	}

	calculateTotal() {}

	calculate() {
		this.calculateTip();
		//this.calculateTotal();
	}
}
