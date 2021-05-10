function  verifyAge() {
  const age = document.getElementById('age').value;

  // trzeba przerobić ze stringa na number
  if (parseInt(age) >= 18) {
    document.getElementById('result').innerHTML = 'Adult'
  } else {
    document.getElementById('result').innerHTML = 'Child'
  }
}

const odd = [];
const even = [];
const all = [1, 4, 6, 7, 8, 9, 11, 13];


for (let i = 0; i <all.length; i++) {
  if (all[i] % 2 === 0) {
    odd.push(all[i])
  } else {
    even.push(all[i])
  }
}

console.log(odd);
console.log(even);

const car = {
  rok: 2000,
  przebieg: 145000,
  model: "Audi"
  }
  const car2 = {
  rok: 2019,
  przebieg: 20000,
  model: "Toyota"
  }
  const car3 = {
  rok: 2011,
  przebieg: 120000,
  model: "Renault"
  }
  
  const arr = [car, car2, car3];
  
function findPerfectCar(cars) {
  const perfectCars = [];
  for (let i = 0; i < cars.length; i++) {
  
  if (cars[i].rok > 2015 && cars[i].przebieg < 25000) {
    perfectCars.push(cars[i]);
    }
  }

  console.log(perfectCars);
  }
  
  findPerfectCar(arr);