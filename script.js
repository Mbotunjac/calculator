//------------------------themes---------------------------------

//slider 
const slid = document.getElementById("myRange");

//previous saved theme
let theme = localStorage.getItem('theme')

//themes:

//theme1 (dark)
function setTheme1() {
  root.setProperty(' --thm1-bg', 'hsl(222, 26%, 31%)');
  root.setProperty('--thm1-bg-toggle', 'hsl(223, 31%, 20%)');
  root.setProperty('--thm1-bg-screen', 'hsl(224, 36%, 15%)');
  root.setProperty('--thm1-key-red', 'hsl(6, 63%, 50%)');
  root.setProperty('--thm1-key-red-sh', 'hsl(6, 70%, 34%)');
  root.setProperty('--thm1-key-red-h', 'hsla(6, 93%, 67%, 1)');
  root.setProperty('--thm1-key-blue', 'hsl(225, 21%, 49%)');
  root.setProperty('--thm1-key-blue-sh', 'hsl(224, 28%, 35%)');
  root.setProperty('--thm1-key-blue-h', 'hsla(224, 51%, 76%, 1)');
  root.setProperty('--thm1-key-orange','hsl(30, 25%, 89%)');
  root.setProperty('--thm1-key-orange-sh', 'hsl(28, 16%, 65%)');
  root.setProperty('--thm1-key-orange-h', 'hsla(31, 100%, 100%, 1)');
  root.setProperty('--thm1-txt-blue', 'hsl(221, 14%, 31%)');
  root.setProperty('--thm1-txt-white', 'hsla(0, 0%, 100%, 1)')
}

//theme2 (light)
function setTheme2() {
  root.setProperty('--thm2-bg', 'hsl(0, 0%, 90%)');
  root.setProperty('--thm2-bg-toggle', 'hsl(0, 5%, 81%)');
  root.setProperty('--thm2-bg-screen', 'hsl(0, 0%, 93%)');
  root.setProperty('--thm2-key-cayan', 'hsl(185, 42%, 37%)');
  root.setProperty('--thm2-key-cayan-sh', 'hsl(185, 58%, 25%)');
  root.setProperty('--thm2-key-cayan-h', 'hsla(184, 40%, 56%, 1)');
  root.setProperty('--thm2-key-orange', 'hsl(25, 98%, 40%)');
  root.setProperty('--thm2-key-orange-sh', 'hsl(25, 99%, 27%)');
  root.setProperty('--thm2-key-orange-h', 'hsla(25, 100%, 61%, 1)');
  root.setProperty('--thm2-key-yellow', 'hsl(45, 7%, 89%)');
  root.setProperty('--thm2-key-yellow-sh', 'hsl(35, 11%, 61%)');
  root.setProperty('--thm3-key-yellow-h', 'hsla(0, 0%, 100%, 1)');
  root.setProperty('--thm2-txt-yellow', 'hsl(60, 10%, 19%)');
  root.setProperty('--thm2-txt-white', 'hsla(0, 0%, 100%, 1)');
 
}

//theme3 (purpule)
function setTheme3 () {
  root.setProperty('--thm3-bg', 'hsl(268, 75%, 9%)');
  root.setProperty('--thm3-bg-toggle', 'hsl(268, 71%, 12%)');
  root.setProperty('--thm3-bg-screen', 'hsl(268, 71%, 12%)');
  root.setProperty('--thm3-key-violet', 'hsl(281, 89%, 26%)');
  root.setProperty('--thm3-key-violet-sh', 'hsl(285, 91%, 52%)');
  root.setProperty('--thm3-key-violet-h', 'hsla(280, 56%, 44%, 1)');
  root.setProperty('--thm3-key-cyan', 'hsl(176, 100%, 44%)');
  root.setProperty('--thm3-key-cyan-sh', 'hsl(177, 92%, 70%)');
  root.setProperty('--thm3-key-cyan-h', 'hsla(176, 100%, 79%, 1)');
  root.setProperty('--thm3-key-magenta', 'hsl(268, 47%, 21%)');
  root.setProperty('--thm3-key-magenta-sh', 'hsl(290, 70%, 36%)');
  root.setProperty('--thm3-key-magenta-h', 'hsla(268, 54%, 44%, 1)');
  root.setProperty('--thm3-txt-yellow', 'hsl(52, 100%, 62%)');
  root.setProperty('--thm3-txt-blue', 'hsl(198, 20%, 13%)')
  root.setProperty('--thm3-txt-white', 'hsla(0, 0%, 100%, 1)');
}


 slid.addEventListener('click', () => {
  document.body.classList.slid('theme1');
  const theme = document.body.classList.contains('theme') ? 'theme1' : 'theme2' , 'theme3';
  if (theme === 'theme1') {
    setTheme1();
  } else if (theme === 'theme2') {
    setTheme2();
  } else 
    setTheme3
  localStorage.setItem('theme', theme);
});




//---------------------calculator--------------------------------

const calculate = (n1, operator, n2) => {
  const firstNum = parseFloat(n1)
  const secondNum = parseFloat(n2)
  if (operator === 'add') return firstNum + secondNum
  if (operator === 'subtract') return firstNum - secondNum
  if (operator === 'multiply') return firstNum * secondNum
  if (operator === 'divide') return firstNum / secondNum
}

const getKeyType = key => {
  const { action } = key.dataset
  if (!action) return 'number'
  if (
    action === 'add' ||
    action === 'subtract' ||
    action === 'multiply' ||
    action === 'divide'
  ) return 'operator'
  // For everything else, return the action
  return action
}

const createResultString = (key, displayedNum, state) => {
  const keyContent = key.textContent
  const keyType = getKeyType(key)
  const {
    firstValue,
    operator,
    modValue,
    previousKeyType
  } = state

  if (keyType === 'number') {
    return displayedNum === '0' ||
      previousKeyType === 'operator' ||
      previousKeyType === 'calculate'
      ? keyContent
      : displayedNum + keyContent
  }

  if (keyType === 'decimal') {
    if (!displayedNum.includes('.')) return displayedNum + '.'
    if (previousKeyType === 'operator' || previousKeyType === 'calculate') return '0.'
    return displayedNum
  }

  if (keyType === 'operator') {
    return firstValue &&
      operator &&
      previousKeyType !== 'operator' &&
      previousKeyType !== 'calculate'
      ? calculate(firstValue, operator, displayedNum)
      : displayedNum
  }

  if (keyType === 'clear') return 0

  if (keyType === 'delete') {
    return display.innerText = display.innerText.slice(0, -1)
  }  
     
  if (keyType === 'calculate') {
    return firstValue
      ? previousKeyType === 'calculate'
        ? calculate(displayedNum, operator, modValue)
        : calculate(firstValue, operator, displayedNum)
      : displayedNum
  }
}

const updateCalculatorState = (key, calculator, calculatedValue, displayedNum) => {
  const keyType = getKeyType(key)
  const {
    firstValue,
    operator,
    modValue,
    previousKeyType
  } = calculator.dataset

  calculator.dataset.previousKeyType = keyType

  if (keyType === 'operator') {
    calculator.dataset.operator = key.dataset.action
    calculator.dataset.firstValue = firstValue &&
      operator &&
      previousKeyType !== 'operator' &&
      previousKeyType !== 'calculate'
      ? calculatedValue
      : displayedNum
  }

  if (keyType === 'calculate') {
    calculator.dataset.modValue = firstValue && previousKeyType === 'calculate'
      ? modValue
      : displayedNum
  }

  if (keyType === 'clear' && key.textContent === 'RESET') {
    calculator.dataset.firstValue = ''
    calculator.dataset.modValue = ''
    calculator.dataset.operator = ''
    calculator.dataset.previousKeyType = ''
  }
}

const updateVisualState = (key, calculator) => {
  const keyType = getKeyType(key)
  Array.from(key.parentNode.children).forEach(k => k.classList.remove('is-depressed'))

  if (keyType === 'operator') key.classList.add('is-depressed')
  if (keyType === 'clear' && key.textContent !== 'RESET') key.textContent = 'RESET'
}

const calculator = document.querySelector('.calculator')
const display = calculator.querySelector('.display')
const keys = calculator.querySelector('.keys')

keys.addEventListener('click', e => {
  if (!e.target.matches('button')) return
  const key = e.target
  const displayedNum = display.textContent
  const resultString = createResultString(key, displayedNum, calculator.dataset)

  display.textContent = resultString
  updateCalculatorState(key, calculator, resultString, displayedNum)
  updateVisualState(key, calculator)
})








/*

//variables
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
const calculator = document.querySelector(`.calculator`)
const keys = calculator.querySelector(`.keys`)


//slider 
const slid = document.getElementById("myRange");



/*  let themeMode = localStorage.getItem('theme')

*/

  