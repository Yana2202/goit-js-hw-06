const textInput = document.querySelector("input#name-input");
const output = document.querySelector("input#name-output");

textInput.addEventListener("input", (event) => {
  output.textContent = event.target.value;

  if (event.target.value === "") {
    output.textContent = "Anonymous";
  }
});
