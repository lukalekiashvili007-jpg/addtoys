const array = ["Star wars Figures", "Anime Figures", "Avatar Figures"];

const input = document.getElementById("input");
const button = document.getElementById("button");
const ul = document.getElementById("ul");

function renderhtml() {
  ul.innerHTML = "";
  array.forEach(toy => {
    const li = document.createElement("li");
    li.textContent = toy;
    ul.appendChild(li);
  });
}
button.addEventListener("click", () => {
  const newToyy = input.value.trim();
  if (newToyy !== "") {
    array.push(newToyy);
    renderhtml();
    input.value = "";
  }
});
renderhtml();

console.log(1);
