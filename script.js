let canvas = document.querySelector("#myCircle");
let ctx = canvas.getContext("2d");

// Listening for the Mouse Event
let canvasPos = getPosition(canvas);
let mouseX = 0;
let mouseY = 0;
 
canvas.addEventListener("mousemove", setMousePosition);
 
function setMousePosition(e) {
    mouseX = e.clientX - canvasPos.x;
    mouseY = e.clientY - canvasPos.y;
} 

// Circle
function circle() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(100, 100, 25, 0, 2 * Math.PI, true);

    ctx.fillStyle = "#9400D3";
    ctx.fill();

    requestAnimationFrame(circle);
}
circle();


// Getting the Exact Mouse Position
function getPosition(el) {
    let xPosition = 0;
    let yPosition = 0;
   
    while (el) {
      xPosition += (el.offsetLeft - el.scrollLeft + el.clientLeft);
      yPosition += (el.offsetTop - el.scrollTop + el.clientTop);
      el = el.offsetParent;
    }
    return {
      x: xPosition,
      y: yPosition
    };
  }
