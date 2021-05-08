Cześć, 

Udało się zrobić wczorajsze zadania ? Mamy nadzieję, ze tak :) Być moze któraś z Was natknęła się na mały problem, a mianiowicie, jeśli miałyśmy taki przypadek

```
<input type="number" id="first"/>
<input type="number" id="second"/>
<button onclick="add()">add</button>

function add() {
  const first = document.getElementById('first');
  const second = document.getElementById('second');

  console.log(first+second);

  return first + second;
}
```

to wynik działania tej funkcji dla cyfr 1, 5 był nieprawidłowy, bo w konsoli mozna bylo zobaczyć 15, a nie 6.

Dzisiaj skupimy się odrobinę na tym dlaczego tak się dzieje i co zrobić, zeby temu zaradzić.

Javascript traktuje obie te wartosci, a więc 1 i 5 jako typ string (pamiętasz jak wspomniałyśmy o typach prostych i 
złozonych w JS?) i tym samym "widząc" znak plusa przeprowadza tzw. konkatynację (ang. concatenation) łącząc je ze sobą. 
Podobnoe gdybyśmy zrobiły np. 
```
'Agata' + 'Paula'

Wynik będzie:

`AgataPaula` (czyli dokładnie ten sam mechanizm)

```

No dobrze, to teraz poczytaj materiały i wykonaj zadania.


## Zadanie 

1. Napisz funkcję, która zamienia string na number. W JS mamy juz funkcję do zamiany stringa na numbera, ale przećwiczmy sobie 
pisanie funkcji raz jeszcze. Mozesz więc "opakować" wbudowany w JS `parseInt()`, albo `+` w swoją funkcję.  

```
function changeToNumber(stringValue) {
  return parseInt(stringValue);
}
```

Zrób coś podobnego z wykorzystaniem +, który równiez zamienia string na number.

2. Zaokrąglij liczbę po przecinku do całkowitej. Podobnie jak poprzednio, opakuj wbudowaną w JS funkcję
`.toFixed()` w swoją funkcję. 

3. Napisz funkcję JS, która zamienia pierwszą literę stringa na wielką. 

## Materiały

- angielsko - języczne

1. https://javascript.info/primitives-methods
2. https://javascript.info/number
3. https://javascript.info/string
4. https://www.w3schools.com/js/js_datatypes.asp
5. https://www.w3schools.com/js/js_number_methods.asp
6. https://www.w3schools.com/js/js_string_methods.asp

- polsko - języczne

1. https://developer.mozilla.org/pl/docs/Web/JavaScript/Guide/Grammar_and_types (na początku są iformacje o zmiennych itd, 
ale jak przeskrollujesz w dół to są tez tam informację o typach, strinach, numberach itd.)


### Rozwiązanie 

Spójrz proszę do pliku `index.js`. Jeśli potrzebujesz pomocy napisz do nas :) 