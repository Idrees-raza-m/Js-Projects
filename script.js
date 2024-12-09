const canvas = document.getElementById("draw");
const ctx = canvas.getContext("2d");
// Grid settings
// Grid settings
const gridWidth = 10; // Number of columns
const gridHeight = 10; // Number of rows
const cellSize = canvas.width / gridWidth; // Dynamically calculate cell size

// Draw grid
function drawGrid() {
  ctx.strokeStyle = "black"; // Light grey for grid lines
  ctx.lineWidth = 1;

  // Vertical lines
  for (let x = 0; x <= gridWidth; x++) {
    ctx.beginPath();
    ctx.moveTo(x * cellSize, 0);
    ctx.lineTo(x * cellSize, canvas.height);
    ctx.stroke();
  }

  // Horizontal lines
  for (let y = 0; y <= gridHeight; y++) {
    ctx.beginPath();
    ctx.moveTo(0, y * cellSize);
    ctx.lineTo(canvas.width, y * cellSize);
    ctx.stroke();
  }
}

drawGrid();
// dr = document.getElementById("draw");
// ctx = dr.getContext("2d");
// //  ctx.fillStyle = "black";
// //  ctx.fillRect(0, 0, dr.width, dr.height);
let x = 200;
// eyes
ctx.beginPath();
ctx.arc(192, 135, 5, 0, 7);
ctx.stroke();
ctx.beginPath();
ctx.arc(208, 135, 5, 0, 7);
ctx.stroke();
// face
ctx.beginPath();
ctx.arc(200, 148, 7, 0, 3);
ctx.stroke();
// body
ctx.beginPath();
ctx.arc(x, 140, 20, 0, 7);
ctx.stroke();
ctx.beginPath();
ctx.arc(x, 260, 40, 0, 7);
ctx.stroke();
ctx.beginPath();
ctx.arc(x, 190, 30, 0, 7);
ctx.stroke();
// base
ctx.beginPath();
ctx.rect(0, 300, 400, 20);
ctx.fillStyle = "green";
ctx.fill();
ctx.stroke();
