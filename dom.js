// const form = document.querySelector("#form");
// const firstName = document.querySelector(".first-name")
// console.log(firstName);

// DOMSelectors = {
//     // store all related code for selecting elements here
//     form: document.querySelector("#form"),
//     firstName: document.querySelector(".first-name"),
//     h2s: document.querySelectorAll("h2"),
// };
// DOMSelectors.form.addEventListener("submit", function (event) {
//     event.preventDefault();
//     DOMSelectors.h2s.forEach(
//         (header) => (header.textContent = DOMSelectors.firstName.value)
//     );
// });

DOMSelectors = {
    form: document.getElementById("form"),
    candy: document.getElementById("candy"),
    type: document.getElementById("type"),
    image: document.getElementById("image"),
    card: document.getElementById("card"),
    output: document.getElementById("card-output"),
  };
  
  DOMSelectors.form.addEventListener("submit", function (event) {
    event.preventDefault();
    enter();
    clear();
    remove();
  });
  
  function enter() {
    candy = DOMSelectors.candy.value;
    type = DOMSelectors.type.value;
    image = DOMSelectors.image.value;
  
    DOMSelectors.output.insertAdjacentHTML(
      "afterbegin",
      `<div class="output">
            <h3> ${candy} ${type}</h3>
            <img src= "${DOMSelectors.image.value}" alt="image" class="image">
            <div> <button class="button"> Remove </button> </div>
      </div>`
    );
  }
  
  
  function remove() {
    const buttons = document.querySelectorAll(".button");
    buttons.forEach((button) => {
      button.addEventListener("click", function() {
        button.parentElement.parentElement.remove();
      });
    });
  }
  

function clear() {
    DOMSelectors.candy.value = "";
    DOMSelectors.type.value = "";
    DOMSelectors.image.value = "";
}
