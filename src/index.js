import { normalState, onClickState } from "./buttonsStates.js";
import Tip from "./Tip.js";

const button5 = document.querySelector("#button-5");
const button10 = document.querySelector("#button-10");
const button15 = document.querySelector("#button-15");
const button25 = document.querySelector("#button-25");
const button50 = document.querySelector("#button-50");
const custom = document.querySelector("#custom").value;
const reset = document.querySelector("#reset");

const calculatorButtons = [
  button5,
  button10,
  button15,
  button25,
  button50,
  reset,
];

calculatorButtons.forEach((button) => {
  normalState(button);

  button.addEventListener("click", () => {
    onClickState(button, calculatorButtons);
  });

  button.addEventListener("click", () => {
    const bill = parseInt(document.querySelector("#bill").value);
    switch (button) {
      case button5:
        button.value = 5;
        button = new Tip(button.value, bill);
        const calculate = button.calculateTip();
        alert(calculate);
        break;
      case button10:
        button.value = 10;
        break;
      case button15:
        button.value = 15;
        break;
      case button25:
        button.value = 25;
        break;
      case button50:
        button.value = 50;
        break;
    }
  });
});
