function literToGallon(number1){
  return number1 / 3.785;
}

function gallonToLiter(number1){
  return number1 * 3.785;
}

const number1 = parseInt(prompt("Enter a number"));

alert(literToGallon(number1));