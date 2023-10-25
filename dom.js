// -Create an object called “DOMSelectors” to hold your DOM Selectors
// -Create a function that creates an object and calls the following functions
// -Create a function that injects the newly created object into the DOM
// -Create a function that clears the input fields after injecting the object
// -Create a function to remove an object after they have been created

const form = document.querySelector("#form");
const firstName = document.querySelector(".first-name")
console.log(firstName);

DOMSelectors = {
    // store all related code for selecting elements here
    form: document.querySelector("#form"),
    firstName: document.querySelector(".first-name"),
    h2s: document.querySelector("h2"),
};
DOMSelectors.form.addEventListener("submit", function (event) {
    event.preventDefault();
    DOMSelectors.h2s.forEach(
        (header) => (header.textContent = DOMSelectors.firstName.value)
    );
});