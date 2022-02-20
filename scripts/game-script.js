const canvas = document.querySelector('.canvas');
const slider = document.querySelector('.slider');
const sliderValue = document.querySelector('.slider-value');
const colourSelector = document.querySelector('.colour-selector');

let mouseDown = false;
window.addEventListener('pointerdown', () => {
  mouseDown = true;
});

window.addEventListener('pointerup', () => {
  mouseDown = false;
});

function brush() {
  if (mouseDown) this.style.background = colourSelector.value;
}

function generatePixels(n) {
  for (let i = 0; i < n * n; i++) {
    const pixelBlock = document.createElement('div');
    pixelBlock.style.height = `${(600 / n / 600) * 100}%`;
    pixelBlock.style.width = `${(600 / n / 600) * 100}%`;
    pixelBlock.addEventListener('mouseover', brush);
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
