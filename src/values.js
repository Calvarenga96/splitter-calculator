import Calculator from "./Calculator.js";
import UI from "./UI.js";

export default class Values {
	constructor({ bill, tipButtons, custom, people }) {
		this.bill = bill;
		this.tipButtons = tipButtons;
		this.custom = custom;
		this.people = people;
		this.tip;
	}

	tipFilter(tip, event) {
		if (event === "click") {
			this.tip = Number(tip.value);
		} else if (event === "input") {
			this.tip = Number(tip.value);
		}
		return this.tip;
	}

	tipValue() {
		let tipValue = this.tip;
		return tipValue;
	}

	billValue() {
		let billValue = Number(this.bill.value);
		return billValue;
	}

	peopleQuantity() {
		let peopleQuantity = Number(this.people.value);
		if (peopleQuantity === 0) {
			UI.messageNoZero();
		} else if (peopleQuantity > 0) {
			UI.noMessage();
		}
		return peopleQuantity;
	}

	getValues() {
		this.tipValue();
		this.billValue();
		this.peopleQuantity();
		this.passValuesToCalculator();
	}

	passValuesToCalculator() {
		const calculator = new Calculator({
			bill: this.billValue(),
			people: this.peopleQuantity(),
			tip: this.tipValue(),
		});
		calculator.calculate();
	}
}
