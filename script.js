//variables
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
const calculator = document.querySelector(`.calculator`)
const keys = calculator.querySelector(`.keys`)


//slider 
const slid = document.getElementById("myRange");



//key
const key = e.target
const action = key.dataset.action
if (!action) {
  console.log('number key!')
}


const display = document.querySelector('.display')

keys.addEventListener('click', e => {
  if (e.target.matches('button')) {
    const key = e.target
    const action = key.dataset.action
    const keyContent = key.textContent
    const displayedNum = display.textContent

    if (
      action ==='add' ||
      action ==='subtract' ||
      action === 'multiply' ||
      action === 'divide'
    ) {
      key.classList.add('is-depressed')
      calculator.dataset.previousKeyType = 'operator'
    } 

    
    if (action === 'decimal') {
      display.textContent = displayedNum + '.'
      console.log('decimal key!')
    } 


    if (action === 'clear') {
      console.log('clear key!')
    }


    if (action === 'calculate') {
      console.log("equal key!")
    }

// Remove .is-depressed class from all keys
    Array.from(key.parentNode.children)
    .forEach(k => k.classList.remove('is-depressed'))
    // ...
  }
})

const previousKeyType = calculator.dataset.previousKeyType

if (!action) {
  if (displayedNum === '0' || previousKeyType === 'operator') {
    display.textContent = keyContent
  } else {
    display.textContent = displayedNum + keyContent
  }
}




//key listener
keys.addEventListener(`clik`, e => {
 if (e.target.matches(`button`)) {
   // Do something
 }
})


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

  