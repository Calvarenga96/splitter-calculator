export function normalState(button) {
  button !== reset
    ? (button.className = "tip-button-normal-state")
    : (button.className = "reset-button-normal-state");
}

export function onClickState(button, listButtons) {
  listButtons.forEach((buttonToNormalState) =>
    normalState(buttonToNormalState)
  );

  button !== reset
    ? (button.className = "tip-button-clicked-state")
    : (button.className = "reset-button-clicked-state");
}
