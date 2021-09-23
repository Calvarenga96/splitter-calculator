import { buttonNormalState, buttonClickedState } from "./buttonsStates.js";
import { getValues } from "./values.js";
import UI from "./UI.js";

const button5 = document.querySelector("#button-5");
const button10 = document.querySelector("#button-10");
const button15 = document.querySelector("#button-15");
const button25 = document.querySelector("#button-25");
const button50 = document.querySelector("#button-50");
const custom = document.querySelector("#custom");
const resetButton = document.querySelector("#reset");

const people = document.querySelector("#people");

export const tipButtons = [button5, button10, button15, button25, button50];

// TIP BUTTONS SECTION --- If the tips button is pressed, those values are sent or if it is custom, those values are passed
tipButtons.forEach((tipButton) => {
	// Initialize the default styles of the buttons
	buttonNormalState(tipButton);
	tipButton.addEventListener("click", (e) => {
		// Changes the styles of the pressed button
		buttonClickedState(tipButton);
		// Here pass the values of the selected button or custom value
		people.addEventListener("input", () => {
			getValues(e.target, null);
		});
	});
});
custom.addEventListener("click", () => {
	people.addEventListener("input", () => {
		getValues(null, Number(custom.value));
	});
});

// RESET BUTTON STATE SECTION
resetButton.className = "reset-button-normal-state";
resetButton.addEventListener("click", () => {
	resetButton.className = "reset-button-clicked-state";
	setTimeout(() => {
		resetButton.className = "reset-button-normal-state";
	}, 30);
});
