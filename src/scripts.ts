import { logDate } from './logDate';

logDate();

// Declarations ------------------------------------------------------------------------------------
const btn1 = document.querySelector('.btn1') as HTMLElement;
const btn2 = document.querySelector('.btn2') as HTMLElement;
const btn3 = document.querySelector('.btn3') as HTMLElement;
const btn4 = document.querySelector('.btn4') as HTMLElement;
const btn5 = document.querySelector('.btn5') as HTMLElement;
const btn6 = document.querySelector('.btn6') as HTMLElement;
const btn7 = document.querySelector('.btn7') as HTMLElement;

// Functions ---------------------------------------------------------------------------------------
function changeBackgroundColor(elementSelector: string, color: string): void {
  const targetElement = document.querySelector(elementSelector);

  if (targetElement) {
    (targetElement as HTMLElement).style.backgroundColor = color;
  }
}

function changeFirstSquareColorToYellow() {
  changeBackgroundColor('.sqr1', 'yellow');
}

function changeText() {
  const targetDiv = document.querySelector('.sqr2');
  targetDiv.textContent = 'Success';
}
function changeThirdSquareColorTransparent() {
  changeBackgroundColor('.sqr3', 'transparent');
}

let isSqr4Visible = true;
function changeFourthSquareTransparency() {
  if (isSqr4Visible) {
    changeBackgroundColor('.sqr4', 'transparent');
    isSqr4Visible = false;
  } else {
    changeBackgroundColor('.sqr4', '#1FC2AE');
    isSqr4Visible = true;
  }
}

const colors = ['tomato', 'yellowgreen', 'lightblue', 'yellow', 'pink'];
let index = 0;
function shuffleColorsOnFifthSquare() {
  if (index > colors.length - 1) {
    index = 0;
  }
  changeBackgroundColor('.sqr5', colors[index]);
  index += 1;
}

const increaseNumber = () => {
  let count = 0;
  const numberDisplay = document.querySelector('.sqr6') as HTMLDivElement;

  const interval = setInterval(() => {
    if (count < 10) {
      count += 1;
      numberDisplay.textContent = count.toString();
    } else {
      clearInterval(interval);
    }
  }, 3000);
};

function lastButtonFunction() {
  const squares = document.querySelectorAll('.square');
  const newColor = 'lightgreen';
  squares.forEach((element) => {
    (element as HTMLElement).style.backgroundColor = newColor;
  });
  changeBackgroundColor('body', '#000000');
}

// Tasks Processes ---------------------------------------------------------------------------------
btn1.addEventListener('click', changeFirstSquareColorToYellow);
btn2.addEventListener('click', changeText);
btn3.addEventListener('click', changeThirdSquareColorTransparent);
btn4.addEventListener('click', changeFourthSquareTransparency);
btn5.addEventListener('click', shuffleColorsOnFifthSquare);
btn6.addEventListener('click', increaseNumber);
btn7.addEventListener('click', lastButtonFunction);
