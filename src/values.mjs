import { tipButtons } from "./index.mjs";

const bill = document.querySelector("#bill");
const custom = document.querySelector("#custom");
const numberOfPeople = document.querySelector("#people");

// I capture the value of the data entered by the user to make the calculations and be able to update while in real time
export const billValue = bill.addEventListener("input", (e) => {
	return Number(e.target.value);
});

export const customValue = custom.addEventListener("input", (e) => {
	return Number(e.target.value);
});

export const numberOfPeopleValue = numberOfPeople.addEventListener(
	"input",
	(e) => {
		return Number(e.target.value);
	}
);

export const tipValues = () => {
	tipButtons.forEach((tipButton) => {
		const buttonValue = Number(tipButton.value);

		console.log(buttonValue);
		return buttonValue;
	});
};
