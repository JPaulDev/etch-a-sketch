const div = document.querySelector('.container');

function generatePixels() {
  for (let i = 0; i < 900; i++) {
    const pixelBlock = document.createElement('div');
    pixelBlock.style.float = 'left';
    pixelBlock.style.borderTop = '1px solid black';
    pixelBlock.style.borderLeft = '1px solid black';
    pixelBlock.style.height = '20px';
    pixelBlock.style.width = '20px';
    div.appendChild(pixelBlock);
  }
}

generatePixels();
