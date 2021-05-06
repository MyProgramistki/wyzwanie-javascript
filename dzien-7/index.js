function countAge(age) {
  const remaining  = 100 - age;

  return `Do 100 lat pozostało Ci jeszcze ${remaining}`;
}

const remainingYears = countAge(26);

function addText(tekst) {
  document.getElementById('first-paragraph').innerHTML = tekst;
}

addText(remainingYears);


function multiply() {
  const first  = document.getElementById('first').value;
  const second = document.getElementById('second').value

  console.log(first * second);

  //  Z

  return first * second;
}

function add() {
  const first  = document.getElementById('first').value;
  const second = document.getElementById('second').value

  console.log(first + second);

  return first + second;
 }

 function substract() {
  const first  = document.getElementById('first').value;
  const second = document.getElementById('second').value

  console.log(first - second);
  return first - second;
 }

 function divide() {
  const first  = document.getElementById('first').value;
  const second = document.getElementById('second').value

  console.log(first / second);
  return first / second;
 }