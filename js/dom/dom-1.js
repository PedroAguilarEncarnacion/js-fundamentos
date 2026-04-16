/*// Returns the element whose id is "app-title".
// It is used when you want to access one specific element by its unique id.
document.getElementById('app-title')

// Returns the first element that matches the CSS selector "#app-title".
// querySelector() uses CSS selector syntax, so it can select by id, class, tag, and more.
document.querySelector("#app-title")

// Returns the first <p> element found in the document.
document.querySelector("p")

// Returns all elements that have the class "menu-items".
// The result is an HTMLCollection.
document.getElementsByClassName("menu-items")

// Returns all <p> elements in the document.
// The result is an HTMLCollection.
document.getElementsByTagName("p")

// Returns all elements that match the selector ".menu-items".
// The result is a NodeList.
document.querySelectorAll(".menu-items")*/

//change through js to HTML
//const title = document.getElementById("app-title");
//console.dir(title);
//title.textContent="Hola soy una fruta"

//change through js to Css

//individual
/*title.style.color = "blue";
title.style.fontSize = "40px";
title.style.border = "2px solid black";
title.style.padding = "10px";*/

//add class
 //title.classList.add("highlight")
//delete
//title.classList.remove("highlight")
//alter
//title.classList.toggle("highlight")

//EVENTS

const btn = document.getElementById("btn")

/*btn.addEventListener("click", function() {
  console.log("Button clicked")
})*/

/*
btn.addEventListener("click", () => {
  console.log("Button clicked")
})*/

/*btn.addEventListener("mouseover", () => {
    console.log("Mouse detected")
})*/

/*const nameInput = document.getElementById("name")
const result = document.getElementById("result")

nameInput.addEventListener("input", () => {
  result.textContent = nameInput.value
})*/