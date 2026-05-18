let calculation = localStorage.getItem('calculation') || '';
displayElement();
function updateCalculation(num) {
  calculation += num;
  displayElement();
  localStorage.setItem('calculation', calculation);
}

function displayElement() {
  document.querySelector('.js-calculation').innerHTML = calculation;
}