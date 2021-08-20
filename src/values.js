import { tipButtons } from "./index.js";
import Calculator from "./Calculator.js";

const bill = document.querySelector("#bill");
const custom = document.querySelector("#custom");
const numberOfPeople = document.querySelector("#people");

// I capture the value of the data entered by the user to make the calculations and be able to update while in real time
const billValue = bill.addEventListener("input", (e) => {
	console.log(Number(e.target.value));
	return Number(e.target.value);
});

const customTipValue = custom.addEventListener("input", (e) => {
	console.log(Number(e.target.value));
	return Number(e.target.value);
});

const numberOfPeopleValue = numberOfPeople.addEventListener("input", (e) => {
	console.log(Number(e.target.value));
	return Number(e.target.value);
});

// Here I extract the values of the selected button
const tipValues = (tipButton) => {
	let buttonValue = Number(tipButton.value);

	console.log(buttonValue);
	return buttonValue;
};

// I INITIALIZE THE CALCULATOR
const calculator = new Calculator({
	tipButtons: tipButtons,
	custom: customTipValue,
	bill: billValue,
	people: numberOfPeopleValue,
});
console.log(calculator);

export { billValue, customTipValue, numberOfPeopleValue, tipValues };
