//------------------------themes---------------------------------

//slider 
const slid = document.getElementById("myRange");

//previous saved theme
let theme = localStorage.getItem('theme')


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

 /* if (keyType === 'delete')
    return substr(0, length - 1)  */

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

  //create a div for the checkmark
  const checkmark = document.createElement('div')


  // if no theme has previously been saved in localStorage then use theme-1
  // else set the last saved theme
  if (!themeMode) {
        const targetElement = document.querySelector("[data-area-theme='1']")
        targetElement.appendChild(checkmark).setAttribute('id','checkmark')
  }

  else {
        const targetElement = document.querySelector("[data-area-theme='" + themeMode + "']")
        targetElement.appendChild(checkmark).setAttribute('id', 'checkmark')
        document.documentElement.setAttribute('data-theme', themeMode)
  }


  // adding eventListener to all areas of the toggle button (checkmark-areas)
  document.querySelectorAll('.checkmark-area').forEach(item => {
        item.addEventListener('click', event => {

              //set data-theme on html-element to the theme matching the pressed button
              document.documentElement.setAttribute('data-theme', item.dataset.areaTheme)

              //move checkmark to the correct position relative to the current theme
              const currentPos = document.querySelector("#checkmark")
              let targetDiv = document.querySelector("[data-area-theme='" + item.dataset.areaTheme + "']")
              targetDiv.appendChild(currentPos)

              //update localStorage
              localStorage.setItem('theme', item.dataset.areaTheme)
        })
  })


*/

  