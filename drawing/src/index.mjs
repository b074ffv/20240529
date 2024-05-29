import "./styles.css";

const canvas = document.querySelector("#draw-area");
const context = canvas.getContext("2d");
let isDrag = false;
let currentColor = "#000000"; // 初期色を設定
let currentSize = 5; // 初期サイズを設定

canvas.addEventListener("mousemove", (event) => {
  //draw(event.layerX, event.layerY);
  draw(event.offsetX, event.offsetY);
});
canvas.addEventListener("touchmove", (event) => {
  draw(event.layerX, event.layerY);
});
canvas.addEventListener("mousedown", () => {
  context.beginPath();
  isDrag = true;
});
canvas.addEventListener("mouseup", () => {
  context.closePath();
  isDrag = false;
});
canvas.addEventListener("touchstart", () => {
  context.beginPath();
  isDrag = true;
});
canvas.addEventListener("touchend", () => {
  context.closePath();
  isDrag = false;
});
const sizeSlider = document.querySelector("#size-slider");
sizeSlider.addEventListener("input", () => {
  currentSize = sizeSlider.value;
});
const clearButton = document.querySelector("#clear-button");
clearButton.addEventListener("click", () => {
  context.clearRect(0, 0, canvas.width, canvas.height);
});
const colorButtons = document.querySelectorAll(".color-button");
colorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentColor = button.getAttribute("data-color");
  });
  button.style.backgroundColor = button.getAttribute("data-color");
});
function draw(x, y) {
  if (!isDrag) {
    return;
  }
  context.lineWidth = currentSize;
  context.lineTo(x, y);
  context.strokeStyle = currentColor; // 線の色を赤に設定
  context.stroke();
}
