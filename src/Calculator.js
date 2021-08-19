class Calculator {
	constructor({ tipButtons, custom, bill, people }) {
		this.tipButtons = tipButtons;
		this.custom = custom;
		this.bill = bill;
		this.people = people;
	}

	calculateTip() {}

	calculateTotal() {}

	calculate() {
		this.calculateTip();
		this.calculateTotal();
	}
}

export default Calculator;
