import { buttonNormalState, buttonClickedState } from "./buttonsStates.js";
import Values from "./Values.js";
import UI from "./UI.js";

const button5 = document.querySelector("#button-5");
const button10 = document.querySelector("#button-10");
const button15 = document.querySelector("#button-15");
const button25 = document.querySelector("#button-25");
const button50 = document.querySelector("#button-50");
const custom = document.querySelector("#custom");
const resetButton = document.querySelector("#reset");
const bill = document.querySelector("#bill");
const people = document.querySelector("#people");

const tipButtons = [button5, button10, button15, button25, button50];

let values = new Values({
	bill,
	tipButtons,
	custom,
	people,
});

// TIP BUTTONS STATE SECTION AND FILTERING THE TIP
tipButtons.forEach((tipButton) => {
	// Initialize the default styles of the buttons
	buttonNormalState(tipButton);
	tipButton.addEventListener("click", (e) => {
		// Changes the styles of the pressed button
		buttonClickedState(tipButton);
		values.tipFilter(tipButton, e.type);
	});
	//If you click inside the custom area, the selected button is deselected
	custom.addEventListener("click", () => {
		buttonNormalState(tipButton);
	});
	custom.addEventListener("input", (e) => {
		values.tipFilter(custom, e.type);
	});
});

// RESET BUTTON STATE SECTION
resetButton.className = "reset-button-normal-state";
resetButton.addEventListener("mousedown", () => {
	resetButton.className = "reset-button-clicked-state";
});
resetButton.addEventListener("mouseup", () => {
	resetButton.className = "reset-button-normal-state";
});

// CAPTURE THE VALUES FOR EACH EVENT
bill.addEventListener("input", () => {
	values.getValues();
});
tipButtons.forEach((tipButton) => {
	tipButton.addEventListener("click", () => {
		values.getValues();
	});
});
custom.addEventListener("input", () => {
	values.getValues();
});
people.addEventListener("input", () => {
	values.getValues();
	if (people.value === "" || people.value === "0") {
		UI.messageNoZero();
	} else {
		UI.noMessage();
	}
});

// RESET BUTTON FUNCTION
resetButton.addEventListener("click", () => {
	tipButtons.forEach((tipButton) => {
		buttonNormalState(tipButton);
	});
});

export { tipButtons };
