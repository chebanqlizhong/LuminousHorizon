const bg = document.getElementById('bg');
const colors = generateRandomColors(250);
let currentIndex = 0;

function generateRandomColors(num) {
  let colors = [];
  for (let i = 0; i < num; i++) {
    colors.push(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
  }
  return colors;
}

function changeBackgroundColor() {
  bg.style.backgroundColor = colors[currentIndex];
  currentIndex = (currentIndex + 1) % colors.length;
}

setInterval(changeBackgroundColor, 50);
