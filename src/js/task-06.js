const textInputEl = document.querySelector(`#validation-input`);
const validationInputEl = Number(textInputEl.getAttribute(`data-length`));
console.log(validationInputEl);

textInputEl.addEventListener(`blur`, onBlur);

function addRemoveColor(remove, add) {
  textInputEl.classList.remove(remove);
  textInputEl.classList.add(add);
}

function onBlur(event) {
  if (event.currentTarget.value.length === validationInputEl) {
    addRemoveColor(`invalid`, `valid`);
  } else {
    addRemoveColor(`valid`, `invalid`);
  }
}

// const textInput = document.querySelector("#validation-input");
// console.log(textInput.getAttribute("data-length"));
// textInput.addEventListener("blur", (event) => {
//   if (event.target.value.length == textInput.getAttribute("data-length")) {
//     textInput.classList.add("valid");
//     if (textInput.classList.contains("invalid")) {
//       textInput.classList.remove("invalid");
//     }
//   } else {
//     if (textInput.classList.contains("valid")) {
//       textInput.classList.remove("valid");
//     }
//     textInput.classList.add("invalid");
//   }
// });
