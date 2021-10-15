//----------------------------cal--------------------------------
const buttons = document.querySelectorAll('.keys button')
const display = document.getElementById('display')
const themeSwitches = document.querySelectorAll('input[name=slider]');
let values = [];


// Update the display values
function updateDisplay() {
  display.innerHTML = values.join(' ')
    .replace(/\./g, ',');
}

function round(num) {    
  const h = Number('1'.padEnd(10, '0')); 
  return Math.round(num * h) / h;
}

// Run the operation (i.e., 1st number + 2nd number)
function runOperation() {
  if (values.length !== 3) {
    return;
  }
  switch (values[1]) {
    case '+':
      values = [
        round(Number(values[0]) + Number(values[2])) + ''
      ];
      break;
    case '-':
      values = [
        round(Number(values[0]) - Number(values[2])) + ''
      ];
      break;
    case '*':
      values = [
        round(Number(values[0]) * Number(values[2])) + ''
      ];
      break;
    case '/':
      values = [
        round(Number(values[0]) / Number(values[2])) + ''
      ];
      break;
    default:
  }
  updateDisplay();
}

// Append a digit or a decimal point
function append(value) {
  const index = (values.length === 3 || values.length === 2) ? 2 : 0;
  if (values[index] && values[index].length >= 10) {
    return;
  }
  values[index] = values[index] || '';
  if (value !== '.' || !values[index].includes('.')) {
    values[index] += value;
    values[index] = `${Number(values[index])}`
    updateDisplay();
  }
}

// Append an operation (+, -, * or /)
function appendOperator(value) {
  if (values.length === 1) {
    values[1] = value;
    updateDisplay();
  }
  else if (values.length === 3) {
    runOperation();
    values[1] = value;
    updateDisplay();
  }
  else if (values.length === 2) {
    values[1] = value;
    updateDisplay();
  }
}

// Delete
function deleteLastCharacter() {
  if (values.length === 1) {
    values[0] = values[0].slice(0, -1);
  } else if (values.length === 3) {
    values[2] = values[2].slice(0, -1);
  }
  updateDisplay();
}

// Reset
function reset() {
  values = [];
  updateDisplay();
}


function handleClick(value) {
  switch (value) {
    case 'reset': 
      reset(); 
      break; 
    case 'delete':
      deleteLastCharacter();
      break;
    case '=':
      runOperation();
      break;
    case '+': 
    case '-':
    case '*':
    case '/':
      appendOperator(value); 
      break;
    default:
      append(value);
  }
}

// Listener
buttons.forEach(button => {
  button.addEventListener('click', (e) => {
    handleClick(e.target.value);
  });
});

//----------------------Theme switcher---------------------------

const root = document.documentElement.style;

// Theme 1
function setTheme1() {
  root.setProperty('--background-color', '#3b4764');
  root.setProperty('--display-color', '#181f32');
  root.setProperty('--display-text-color', '#ffffff');
  root.setProperty('--keyboard-background-color', '#242e44');
  root.setProperty('--key-default-color', '#e9e3db');
  root.setProperty('--key-default-shadow-color', '#b3a398');
  root.setProperty('--key-default-hover-color',  '#FFFFFE');
  root.setProperty('--key-default-text-color', '#4a505f');
  root.setProperty('--key-accent-color', '#64719b');
  root.setProperty('--key-accent-shadow-color', '#424d74');
  root.setProperty('--key-accent-hover-color', '#A2B2E1');
  root.setProperty('--key-accent-text-color', '#ffffff');
  root.setProperty('--key-equal-color', '#d14030');
  root.setProperty('--key-equal-shadow-color', '#912417');
  root.setProperty('--key-equal-hover-color', '#F96B5B');
  root.setProperty('--key-equal-text-color', '#ffffff');
}

// Theme 2
function setTheme2() {
  root.setProperty('--background-color', '#e6e6e6');
  root.setProperty('--display-color', '#eeeeee');
  root.setProperty('--display-text-color', '#36362e');
  root.setProperty('--keyboard-background-color', '#d3cdcd');
  root.setProperty('--key-default-color', '#e5e4df');
  root.setProperty('--key-default-shadow-color', '#a69d90');
  root.setProperty('--key-default-hover-color', '#FFFFFE');
  root.setProperty('--key-default-text-color', '#37372f');
  root.setProperty('--key-accent-color', '#3a8087');
  root.setProperty('--key-accent-shadow-color', '#1b6067');
  root.setProperty('--key-accent-hover-color', ' #62B5BC');
  root.setProperty('--key-accent-text-color', '#ffffff');
  root.setProperty('--key-equal-color', '#c85401');
  root.setProperty('--key-equal-shadow-color', '#893a01');
  root.setProperty('--key-equal-hover-color', '#FF8A38');
  root.setProperty('--key-equal-text-color', '#ffffff');
}

// Theme 3
function setTheme3() {
  root.setProperty('--background-color', '#18052a');
  root.setProperty('--display-color', '#1e0835');
  root.setProperty('--display-text-color', '#ffe848');
  root.setProperty('--keyboard-background-color', '#1e0835');
  root.setProperty('--key-default-color', '#341a4d');
  root.setProperty('--key-default-shadow-color', '#861a9d');
  root.setProperty('--key-default-hover-color', '#6C34AC');
  root.setProperty('--key-default-text-color', '#ffe540');
  root.setProperty('--key-accent-color', '#56077c');
  root.setProperty('--key-accent-shadow-color', '#bf15f3');
  root.setProperty('--key-accent-hover-color', ' #8631AF');
  root.setProperty('--key-accent-text-color', '#ffffff');
  root.setProperty('--key-equal-color','#00decf');
  root.setProperty('--key-equal-shadow-color', '#6df9f0');
  root.setProperty('--key-equal-hover-color', '#93FFF8');
  root.setProperty('--key-equal-text-color', '#043c3c');
}

function onThemeSwitch(event) {
  console.log(event.target.value)
  switch (event.target.value) {
    case '2':
      setTheme2();
      break;
    case '3':
      setTheme3();
      break;
    default:
      setTheme1();
  }
}

//Listener
themeSwitches.forEach(checkbox => {
  checkbox.addEventListener('change', onThemeSwitch);
})