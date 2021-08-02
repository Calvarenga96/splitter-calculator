const button5 = document.querySelector("#button-5");
const button10 = document.querySelector("#button-10");
const button15 = document.querySelector("#button-15");
const button25 = document.querySelector("#button-25");
const button50 = document.querySelector("#button-50");
const custom = document.querySelector("#custom");
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
    onClickState(button);
  });
});

function normalState(button) {
  button !== reset
    ? (button.className = "tip-button-normal-state")
    : (button.className = "reset-button-normal-state");
}

function onClickState(button) {
  calculatorButtons.forEach((buttonToNormalState) =>
    normalState(buttonToNormalState)
  );

  button !== reset
    ? (button.className = "tip-button-clicked-state")
    : (button.className = "reset-button-clicked-state");
}
