Cześć,

wczoraj mówiłyśmy o pętlach, a dzisiaj dołozymy do nich operatory logiczne i wyrazenia warunkowe i będziemy pisać piękne pętle z ich uzyciem. (Inne rzeczy oczywiście tez, ale poćwiczymy
sobie przy okazji jeszcze pętle)

### Operatory logiczne

Moze je trochę pamiętasz z lekcji matematyki, albo jakiegoś innego miejsca, w Javascript mamy cztery operatory: 
  a. || (OR)
  b. && (AND)
  c. ! (NOT)
  d. ?? (Nullish Coalescing)


Mimo, ze nazywane logicznymi mogą być uzyte do wartości jakiegokolwiek typu.

Sprawdźmy: (przetestuj w konsoli i bazując na udostępnionych materiałach postaraj się zrozumieć dlaczego otrzymałaś taki wynik)

`console.log('Imię' || true)`
`console.log('Imię' && true)`
`console.log('Imię' != true)`;

### Wyrazenia warunkowe

Umozliwiają nam wykonać rózne akcje w zalezności od warunku. 

a. `if` - uzywamy, zeby stworzyć blok kodu, który będzie wykonany gdy warunek wewnątrz `if` zostanie spełniony
b. `if else` - stworzenie kolejnego przypadku do sprawdzenia, jeśli pierwszy ich byl nieprawidłowy
c. `else` - do stworzenia bloku kodu, który zostanie wykonany gdy zaden ze zdefiniowanych warunków nie zostanie spełniony.




## Zadania

1. Stwórz funkcję JS `verifyAge()`, która zczyta wartość z pola `<input type="number" id="age"/>` od uzytkownika a następnie na kliknięcie przycisku `<button onclick="verifyAge()">Verify age</button>` wypisze w `<div id="result"></div>` czy uzytkownik jest pełnoletni czy nie. (Stwórz wszystkie te elementy HTML w pliku .html)
2. Masz trzy tablice:
  - `const odd = []`;
  - `const even = []`;
  - `const all = [1, 4, 6, 7, 8, 9, 11, 13]`;
 Utwórz funkcję, która sprawdzi, czy dana liczba z tablicy liczb jest parzysta czy nieparzysta i umieści w odpowiedniej tablicy.
 Aby sprawdzić, czy liczna jest parzysta czy nie uzyj modulo, czyli `%` 
 `if (liczba % 2 === 0)` (dokładnie oznacza to - jeśli reszta z dzielenia przed dwa jest równa zero)
 3. Masz tablicę następujących obiektów:

 ```
 const cars = [{
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
  rok: 2016,
  przebieg: 120000,
  model: "Renault"
  }];

  ```
  Zdefiniuj funkcję `findPerfectCar`, ktora przyjmie tą tablicę i sprawdzi, ktory z samochód jest najlepszy. 
  Najlepszy to znaczy taki, którego rocznik jest powyzej 2015 i przebieg ponizej 25000.


## Materiały

angielsko-języczne

1. https://javascript.info/ifelse
2. https://javascript.info/logical-operators
3. https://www.w3schools.com/js/js_comparisons.asp
4. https://www.w3schools.com/js/js_if_else.asp

polsko-angielskie

1. http://www.w3big.com/pl/jsref/jsref-if.html

### Rozwiązanie

Sprawdz plik `index.js`, a takze `index-rozwiazanie.html` W razie problemów skontaktuj się z nami. 