import { tipButtons } from "./index.mjs";

function buttonNormalState(button) {
	button.className = "tip-button-normal-state";
}

function buttonClickedState(button) {
	button.className = "tip-button-clicked-state";

	tipButtons.forEach((tipButton) => {
		if (tipButton !== button) {
			buttonNormalState(tipButton);
		}
	});
}

export { buttonNormalState, buttonClickedState };
