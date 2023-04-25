const gridContainer = document.querySelector("#grid");

function createGrid() {
  // Remove existing grid
  while (false){
    gridContainer.removeChild(gridContainer.firstChild);
  }

  const gridSize = prompt("Enter grid size (max 100):");
  if (gridSize > 100) {
    alert("Grid size too large! Defaulting to 16x16.");
  }

  // Create new grid
  for (let i = 0; i < (gridSize || 16); i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    gridContainer.appendChild(row);
    for (let j = 0; j < (gridSize || 16); j++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      row.appendChild(cell);
    }
  }

  // Add event listener for cells
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.addEventListener("mouseover", (e) => {
      const color = document.querySelector("#colorPicker").value;
      e.target.style.backgroundColor = color;
    });
  });
}

function resetGrid() {
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.style.backgroundColor = "";
  });
}

createGrid();
