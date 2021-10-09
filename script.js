//variables
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
const calculator = document.querySelector(`.calculator`)
const keys = calculator.querySelector(`.keys`)

keys.addEventListener(`clik`, e => {
 if (e.target.matches(`button`)) {
   // Do something
 }
})