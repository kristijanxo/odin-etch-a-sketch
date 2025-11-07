const gridContainer = document.querySelector("#grid-container");

function createGrid(gridSize = 16) {
  for (let i = 0; i < gridSize * gridSize; i++) {
    const gridElement = document.createElement("div");
    const cellSize = 100 / gridSize;
    gridElement.classList.add("grid-element");
    gridElement.style.flex = `0 0 ${cellSize}%`;
    gridContainer.appendChild(gridElement);
  }
}

function addColorationListeners() {
  const allGridElements = document.querySelectorAll(".grid-element");
  allGridElements.forEach((element) => {
    element.addEventListener("mouseenter", () => {
      // element.style.backgroundColor = "red";
      element.classList.add("colored-grid-element");
    });
  });
}

const clearButton = document.querySelector("#clear-button");
clearButton.addEventListener("click", () => {
  document.querySelectorAll(".grid-element").forEach((element) => {
    element.classList.remove("colored-grid-element");
  });
});

const changeGridButton = document.querySelector("#change-grid-button");
changeGridButton.addEventListener("click", () => {
  let validInput = false;
  while (!validInput) {
    const newGridSize = prompt(
      "Enter new grid size (applies to H×W, max 100)",
      16,
    );
    if (newGridSize === null) {
      break;
    }

    const gridSizeNumber = Number(newGridSize);
    if (
      Number.isInteger(gridSizeNumber) &&
      gridSizeNumber >= 2 &&
      gridSizeNumber <= 100
    ) {
      validInput = true;
      gridContainer.replaceChildren();
      createGrid(gridSizeNumber);
      addColorationListeners();
    } else {
      alert("Invalid input. Please enter a number between 2-100");
    }
  }
});

createGrid();
addColorationListeners();
