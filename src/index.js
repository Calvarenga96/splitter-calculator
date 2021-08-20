import { buttonNormalState, buttonClickedState } from "./buttonsStates.js";
import {
	billValue,
	customTipValue,
	numberOfPeopleValue,
	tipValues,
} from "./values.js";

const button5 = document.querySelector("#button-5");
const button10 = document.querySelector("#button-10");
const button15 = document.querySelector("#button-15");
const button25 = document.querySelector("#button-25");
const button50 = document.querySelector("#button-50");
const resetButton = document.querySelector("#reset");

const tipButtons = [button5, button10, button15, button25, button50];

// TIP BUTTONS SECTION
tipButtons.forEach((tipButton) => {
	// Initialize the default styles of the buttons
	buttonNormalState(tipButton);

	tipButton.addEventListener("click", () => {
		// Changes the styles of the pressed button
		buttonClickedState(tipButton);

		// TIP BUTTONS VALUES (I EXTRACT THE CUSTOM VALUE AND NUMBER OF PEOPLE IN THE VALUES.JS FILE)
		tipValues(tipButton);
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

export { tipButtons };
