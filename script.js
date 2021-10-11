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
  