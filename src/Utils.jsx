export const FormShortcutField = (e) => {
  const form = document.querySelector("form");
  if (!form) return;
  const buttons = form.querySelectorAll("button:not([disabled])");
  if (!buttons) return;
  const clickableButton = buttons[buttons.length - 1];
  clickableButton?.click();
}