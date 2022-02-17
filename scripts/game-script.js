const div = document.querySelector('.container');
const slider = document.querySelector('input');
const sliderValue = document.querySelector('.slider-value');

function generatePixels(number) {
  for (let i = 0; i < number * number; i++) {
    const pixelBlock = document.createElement('div');
    pixelBlock.style.float = 'left';
    pixelBlock.style.borderTop = '1px solid black';
    pixelBlock.style.borderLeft = '1px solid black';
    pixelBlock.style.height = '40px';
    pixelBlock.style.width = '40px';
    div.appendChild(pixelBlock);
  }
}

slider.addEventListener('input', function updateValue() {
  div.replaceChildren();
  sliderValue.textContent = this.value;
  generatePixels(slider.value);
});
