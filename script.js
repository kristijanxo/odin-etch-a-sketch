const gridContainer = document.querySelector("#grid-container");

for (let i = 0; i < 256; i++) {
  const gridElement = document.createElement("div");
  gridElement.classList.add("grid-element");
  gridContainer.appendChild(gridElement);
}
