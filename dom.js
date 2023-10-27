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
    form: document.querySelector("#form"),
    type: document.querySelector("#star-type"),
    name: document.querySelector("#star-name"),
    image: document.querySelector("#image"),
    card: document.querySelector("#card"),
};
DOMSelectors.form.addEventListener("submit", function (event) {
    event.preventDefault();
    enter();
});

function enter() {
    type = DOMSelectors.type.value;
    star = DOMSelectors.name.value;
    image = DOMSelectors.image.value;
    DOMSelectors.card.insertAdjacentHTML(
    "afterbegin",
    `<div class="card">
        <h3 class="name">${star}</h3>
        <h3 class="type">${type}</h3>
        <img class="image" src="${image}">
        <button class="remove">Remove</button>
    </div>`
      );
    }
function remove() {
    
}