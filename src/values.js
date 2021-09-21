import Calculator from "./Calculator.js";

const bill = document.querySelector("#bill");
const custom = document.querySelector("#custom");
const numberOfPeople = document.querySelector("#people");

function getValues(tipButton) {
	// I capture the value of the data entered by the user to make the calculations and be able to update while in real time
	const billValue = bill.value;
	const customTipValue = custom.value;
	const numberOfPeopleValue = numberOfPeople.value;
	// Here I extract the values of the selected button
	const tipValues = Number(tipButton.value);
	// Pass the values to the calculator
	const calculator = new Calculator({
		custom: customTipValue,
		bill: billValue,
		people: numberOfPeopleValue,
		tip: tipValues,
	});
	calculator.calculate();
	return billValue, numberOfPeopleValue, tipValues;
}

export { getValues };
