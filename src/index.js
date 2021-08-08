import { normalState, onClickState } from "./buttonsStates.js";
import Tip from "./Tip.js";

const button5 = document.querySelector("#button-5");
const button10 = document.querySelector("#button-10");
const button15 = document.querySelector("#button-15");
const button25 = document.querySelector("#button-25");
const button50 = document.querySelector("#button-50");
const custom = Number(document.querySelector("#custom").value);
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

    const people = Number(document.querySelector("#people").value);
    const bill = Number(document.querySelector("#bill").value);
    console.log(typeof bill)
    switch (button) {
      case button5:
        const button5Value = 5;
        button = new Tip(button5Value, bill, people);
        alert(button.initCalculator());
        break;
      case button10:
        const button10Value = 10;
        button = new Tip(button10Value, bill, people);
        alert(button.initCalculator());
        break;
      case button15:
        const button15Value = 15;
        button = new Tip(button15Value, bill, people);
        alert(button.initCalculator());
        break;
      case button25:
        const button25Value = 25;
        button = new Tip(button25Value, bill, people);
        alert(button.initCalculator());
        break;
      case button50:
        const button50Value = 50;
        button = new Tip(button50Value, bill, people);
        alert(button.initCalculator());
        break;
    }
  });
});
