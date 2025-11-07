const gridContainer = document.querySelector("#grid-container");

for (let i = 0; i < 256; i++) {
  const gridElement = document.createElement("div");
  gridElement.classList.add("grid-element");
  gridContainer.appendChild(gridElement);
}

const allGridElements = document.querySelectorAll(".grid-element");

allGridElements.forEach((element) => {
  element.addEventListener("mouseenter", () => {
    // element.style.backgroundColor = "red";
    element.classList.add("colored-grid-element");
  });
});

const resetButton = document.querySelector("#reset-button");
resetButton.addEventListener("click", () => {
  allGridElements.forEach((element) => {
    element.classList.remove("colored-grid-element");
  });
});
