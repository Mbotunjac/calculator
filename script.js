//variables
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
const calculator = document.querySelector(`.calculator`)
const keys = calculator.querySelector(`.keys`)
//slider 
const slid = document.getElementById("myRange");



//key
const key = e.target
const action = key.dataset.action



//key listener
keys.addEventListener(`clik`, e => {
 if (e.target.matches(`button`)) {
   // Do something
 }
})

if (!action) {
    console.log('number key!')
  }




  let themeMode = localStorage.getItem('theme')

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




  /*
  if (
    action === 'add' ||
    action === 'subtract' ||
    action === 'multiply' ||
    action === 'divide'
  ) {
    console.log('operator key!')
  }



  if (action === 'decimal') {
    console.log('decimal key!')
  }
  
  if (action === 'clear') {
    console.log('clear key!')
  }
  
  if (action === 'calculate') {
    console.log('equal key!')
  }
*/
  