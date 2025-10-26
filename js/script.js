const containerDiv = document.querySelector(".container");

squareHeight = (500 / Math.sqrt(16)) - 2;

for (let i = 0; i < 16; i++) {
  const squareDiv = document.createElement("div");
  squareDiv.style.border = "1px solid black";
  squareDiv.style.height = `${squareHeight}px`;
  squareDiv.style.aspectRatio = "1";
  containerDiv.appendChild(squareDiv);
}