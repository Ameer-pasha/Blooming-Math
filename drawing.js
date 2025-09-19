const BACKGROUND_COLOR = "#000000ff";

const LINE_COLOR = "#ffffffff";
const LINE_WIDTH = 15;

var currentX = 0;
var currentY = 0;
var previousX = 0;
var previousY = 0;
var canvas;
var context;

function prepareCanvas() {
  // console.log("Preparing Canvas");
  canvas = document.getElementById("canvas");
  context = canvas.getContext("2d");

  context.fillStyle = BACKGROUND_COLOR;
  context.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);

  context.strokeStyle = LINE_COLOR;

  context.lineWidth = LINE_WIDTH;
  context.lineJoin = "round";
  context.lineCap = "round";

  var isDrawing = false;

  document.addEventListener("mousedown", function (event) {
    // console.log("Mouse Pressed!");
    currentY = event.clientY - canvas.offsetTop;
    currentX = event.clientX - canvas.offsetLeft;
    isDrawing = true;

  });

  document.addEventListener("mousemove", function (event) {
    if (isDrawing) {
      previousX = currentX;
      currentX = event.clientX - canvas.offsetLeft;

      previousY = currentY;
      currentY = event.clientY - canvas.offsetTop;

      context.beginPath();
      context.moveTo(previousX, previousY);
      context.lineTo(currentX, currentY);
      context.closePath();

      context.stroke();
    }

    console.log(`Current X: (${currentX}), Current Y: (${currentY})`);
  });

  document.addEventListener("mouseup", function (event) {
    // console.log("Mouse Up");
    isDrawing = false;
  });


    canvas.addEventListener("mouseleave", function (event) {
    isDrawing = false;
  });

  canvas.addEventListener("touchstart", function (event) {
    // console.log("Touch Started!");
    currentY = event.touches[0].clientY - canvas.offsetTop;
    currentX = event.touches[0].clientX - canvas.offsetLeft;
    isDrawing = true;

  });

  canvas.addEventListener("touchend", function (event) {
    isDrawing = false;
  });
  
  canvas.addEventListener("touchcancel", function (event) {
    isDrawing = false;
  });  

  canvas.addEventListener("touchmove", function (event) {
    if (isDrawing) {
      previousX = currentX;
      currentX = event.touches[0].clientX - canvas.offsetLeft;

      previousY = currentY;
      currentY = event.touches[0].clientY - canvas.offsetTop;

      draw();
    }
});
}

function draw() {
    context.beginPath();
    context.moveTo(previousX, previousY);
    context.lineTo(currentX, currentY);
    context.closePath();
    context.stroke();
}

function clearCanvas() {
    
    currentX = 0;
    currentY = 0;
    previousX = 0;
    previousY = 0;
    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");
    context.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);

}


