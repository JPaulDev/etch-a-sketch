const div = document.querySelector('.canvas');
const slider = document.querySelector('input');
const sliderValue = document.querySelector('.slider-value');

function generatePixels(n) {
  for (let i = 0; i < n * n; i++) {
    const pixelBlock = document.createElement('div');
    pixelBlock.style.height = `${(600 / n / 600) * 100}%`;
    pixelBlock.style.width = `${(600 / n / 600) * 100}%`;
    pixelBlock.style.borderTop = '1px solid black';
    pixelBlock.style.borderLeft = '1px solid black';
    div.appendChild(pixelBlock);
  }
}

// Called on load to draw initial blocks
generatePixels(30);

slider.addEventListener('input', function updateValue() {
  sliderValue.textContent = this.value;
});

slider.addEventListener('mouseup', () => {
  div.replaceChildren();
  generatePixels(slider.value);
});
