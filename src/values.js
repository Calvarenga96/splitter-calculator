import Calculator from "./Calculator.js";

const bill = document.querySelector("#bill");
const numberOfPeople = document.querySelector("#people");

function getValues(tipButton = undefined, custom = undefined) {
	// I capture the value of the data entered by the user to make the calculations and be able to update while in real time
	const billValue = Number(bill.value);
	let customTipValue;
	if (custom === undefined) {
		customTipValue = undefined;
	} else {
		customTipValue = custom;
	}
	const numberOfPeopleValue = Number(numberOfPeople.value);
	// Here I extract the values of the selected button
	let tipValues;
	if (tipButton === undefined) {
		tipValues = undefined;
	} else {
		tipValues = Number(tipButton.value);
	}
	// Pass the values to the calculator
	const calculator = new Calculator({
		custom: customTipValue,
		bill: billValue,
		people: numberOfPeopleValue,
		tip: tipValues,
	});
	calculator.calculate();
	console.log(
		`Bill Value: ${billValue} --`,
		`People Value: ${numberOfPeopleValue} --`,
		`Tip Value: ${tipValues} --`,
		`Custom Value: ${customTipValue}`
	);
	return billValue, numberOfPeopleValue, tipValues, customTipValue;
}

export { getValues };
