let counterValue = 0;
const countIncrement = document.querySelector('[data-action="increment"]');
const countDecrement = document.querySelector('[data-action="decrement"]');
const valueEL = document.querySelector("#value");

countIncrement.addEventListener("click", () => {
  counterValue += 1;
  valueEL.textContent = counterValue;
});

countDecrement.addEventListener("click", () => {
  counterValue -= 1;
  valueEL.textContent = counterValue;
});