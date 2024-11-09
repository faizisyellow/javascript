const button = document.getElementById("button");
const h1 = document.getElementsByClassName("counter")[0];

// const variable can't update value after initizalition.
let counter = 0;

button.addEventListener("click", () => {
  counter++;
  h1.textContent = `${counter} clicked`;
});
