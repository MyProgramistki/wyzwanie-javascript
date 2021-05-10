const counties = [];
// counties[0] === 'undefined';

counties.push(5);

counties.pop();


const p = document.querySelectorAll('p'); //pobieramy wszystkie paragrafy z dokumentu

for (let i=0; i<p.length; i++) {
    p[i].style.color = 'red'; //każdy paragraf na czerwono
}

const text = ["To", "jest", "przykładowy", "tekst"];
let strResult = "";
for (var i=0; i < text.length; i++) {
 strResult = `${strResult} ${text[i]}`;
}

console.log(strResult);


const numbers = [1, 2, 3, 4, 5, 6]
let numResult = 0;

for (let i=0; i < numbers.length; i++) {
		numResult = numResult + numbers[i];
}

console.log(numResult);