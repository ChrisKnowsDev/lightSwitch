const checkBox = document.querySelector('input');
const html = document.querySelector('html');

function update(bgColor, txtColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = txtColor;
}

checkBox.addEventListener('change', changeColor);

function changeColor(e) {
  (e.target.checked) ? update('#333', '#fff'): update('#fff', '#333');
}