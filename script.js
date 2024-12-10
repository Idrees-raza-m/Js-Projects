dr = document.getElementById("draw");
ctx = dr.getContext("2d");
//  ctx.fillStyle = "black";
//  ctx.fillRect(0, 0, dr.width, dr.height);
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
