import { buttonNormalState, buttonClickedState } from "./buttonsStates.mjs";
import {
	billValue,
	customValue,
	numberOfPeopleValue,
	tipValues,
} from "./values.mjs";

const button5 = document.querySelector("#button-5");
const button10 = document.querySelector("#button-10");
const button15 = document.querySelector("#button-15");
const button25 = document.querySelector("#button-25");
const button50 = document.querySelector("#button-50");
const resetButton = document.querySelector("#reset");

export const tipButtons = [button5, button10, button15, button25, button50];

// TIP BUTTONS SECTION
tipButtons.forEach((tipButton) => {
	buttonNormalState(tipButton);

	tipButton.addEventListener("click", () => {
		buttonClickedState(tipButton);
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
