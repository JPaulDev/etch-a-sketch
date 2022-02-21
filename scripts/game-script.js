const canvas = document.querySelector('.canvas');
const slider = document.querySelector('.slider');
const sliderValue = document.querySelector('.slider-value');
const colourSelector = document.querySelector('.colour-selector');
const tools = document.querySelectorAll('.tools');
const clearButton = document.querySelector('#clear');

let currentTool = 'pen';
let mouseDown = false;

window.addEventListener('pointerdown', () => {
  mouseDown = true;
});
window.addEventListener('pointerup', () => {
  mouseDown = false;
});

tools.forEach((tool) => {
  tool.addEventListener('click', function changeTool() {
    document.querySelector('.selected').classList.remove('selected');
    currentTool = this.getAttribute('id');
    this.classList.add('selected');
  });
});

function toolAction() {
  if (mouseDown && currentTool === 'pen') {
    this.style.backgroundColor = colourSelector.value;
  } else if (mouseDown && currentTool === 'eraser') {
    this.style.backgroundColor = '#FFFFFF';
  } else if (mouseDown && currentTool === 'rainbow') {
    let r = Math.round(Math.random() * (240 - 70) + 70);
    let g = Math.round(Math.random() * (240 - 70) + 70);
    let b = Math.round(Math.random() * (240 - 70) + 70);
    this.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  }
}

clearButton.addEventListener('click', () => {
  const pixels = document.querySelectorAll('.canvas div');
  pixels.forEach((pixel) => {
    pixel.style.backgroundColor = '#FFFFFF';
  });
});

function generatePixels(n) {
  for (let i = 0; i < n * n; i++) {
    const pixelBlock = document.createElement('div');
    pixelBlock.style.height = `${(600 / n / 600) * 100}%`;
    pixelBlock.style.width = `${(600 / n / 600) * 100}%`;
    pixelBlock.addEventListener('mouseover', toolAction);
    canvas.appendChild(pixelBlock);
  }
}

// Called on load to draw initial blocks
generatePixels(30);

slider.addEventListener('input', function updateValue() {
  sliderValue.textContent = `${this.value} x ${this.value}`;
});

slider.addEventListener('mouseup', function sliderVal() {
  canvas.replaceChildren();
  generatePixels(this.value);
});
