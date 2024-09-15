let display = document.querySelector('.display')
function addInp(input) {
  display.value += input
}
function clearInp() {
  display.value = ''
}
function calculate() {
  try {
    display.value = eval(display.value)

  } catch (Eror) {
    
    display.value = 'Eror !'
  }
}









