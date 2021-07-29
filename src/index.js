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
  if (button != reset) {
    button.onclick = () => {
      buttonState(button);
    };
  }
});

const onClickStatePorcentageButton = (button) =>
  (button.style.backgroundColor = "var(--color-primary)");

function buttonState(button) {
  if (button.onclick) {
    onClickStatePorcentageButton(button);
  }
}
