const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const startBtn = document.querySelector('button[data-action="start"]');
const stopBtn = document.querySelector('button[data-action="stop"]');

const getRandomColor = () => {
  const randomColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
  console.log(randomColor);
  document.body.style.background = randomColor;
};

let timerId = null;

const changeColorOfBody = () => {
  timerId = setInterval(getRandomColor, 1000);
  return timerId;
}

const stopColorOfBody = () => {
 clearInterval(timerId);
}

startBtn.addEventListener('click', changeColorOfBody);
stopBtn.addEventListener('click', stopColorOfBody);
