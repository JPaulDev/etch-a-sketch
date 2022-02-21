const canvas = document.querySelector('.canvas');
const slider = document.querySelector('.slider');
const sliderValue = document.querySelector('.slider-value');
const colourSelector = document.querySelector('.colour-selector');
const tools = document.querySelectorAll('.tools');

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
    this.style.background = colourSelector.value;
  } else if (mouseDown && currentTool === 'eraser') {
    this.style.background = '#FFFFFF';
  }
}

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

slider.addEventListener('mouseup', () => {
  canvas.replaceChildren();
  generatePixels(slider.value);
});
