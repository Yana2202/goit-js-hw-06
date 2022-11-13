const counter = {
  countDecrement: document.querySelector('[data-action = "decrement"]'),
  countIncrement: document.querySelector('[data-action = "increment"]'),
  countValue: document.querySelector("#value"),
};
counter.countDecrement.addEventListener("click", onCountDecrement);
counter.countIncrement.addEventListener("click", onCountIncrement);

let counterValue = 0;
function onCountDecrement() {
  counter.counterValue.textContent = counterValue -= 1;
}
function onCountIncrement() {
  counter.counterValue.textContent = counterValue += 1;
}
