import Calculator from "./Calculator.js";

const bill = document.querySelector("#bill");
const numberOfPeople = document.querySelector("#people");

function getValues(tipButton = null, custom = null) {
	// I capture the value of the data entered by the user to make the calculations and be able to update while in real time

	let customTipValue, tipValues;
	// Here I define the value of the custom value
	!custom ? (customTipValue = null) : (customTipValue = custom);
	// Here I define the value of the tip value
	!tipButton ? (tipValues = null) : (tipValues = Number(tipButton.value));
	// I get the bill and tip values
	const billValue = Number(bill.value);
	const numberOfPeopleValue = Number(numberOfPeople.value);
	// Pass the values to the calculator
	const calculator = new Calculator({
		custom: customTipValue,
		tip: tipValues,
		bill: billValue,
		people: numberOfPeopleValue,
	});
	calculator.calculate();
}

export { getValues };
