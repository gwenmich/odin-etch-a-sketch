const containerDiv = document.querySelector(".container");


const chooseBtn = document.querySelector("button");
chooseBtn.addEventListener("click", () => {
  let side;
  while (true) {
    side = Number(prompt("Choose how many squares per side (max 100): "));

    if (!isNaN(side) && side > 0 && side <= 100) {
      break;
    }
    alert("Invalid input! Please insert a number up to 100.")
  }
  const gridSize = side ** 2;
  const squareHeight = (500 / side) - 2;

  buildGrid(gridSize, squareHeight);

});

function buildGrid(gridSize, squareHeight) {
  containerDiv.innerHTML = "";

  for (let i = 0; i < gridSize; i++) {
    const squareDiv = document.createElement("div");
    squareDiv.style.border = "1px solid #F5F5F5";
    squareDiv.style.height = `${squareHeight}px`;
    squareDiv.style.aspectRatio = "1";
    containerDiv.appendChild(squareDiv);

    squareDiv.addEventListener("mouseover", () => {
      squareDiv.style.backgroundColor = generateRandomColour();
    })
  }
}

function generateRandomColour() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  const randomColour = `rgb(${r}, ${g}, ${b})`;

  return randomColour;
}