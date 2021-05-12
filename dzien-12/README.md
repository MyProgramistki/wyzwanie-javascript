Siemanko,

Dzisiaj nieco luźniejszy dzień, akurat dodatkowy czas na nadrobienie zaległości dla tych z Was, które przegapiły parę lekcji z tego powodu, ze nie udostępniałyśmy wyzwania na grupie, a jedynie na funpagu. Jeszcze raz ogromnie przepraszamy!!!

Pamiętacie jak mówiłyśmy o funkcjach i o tym, ze mamy dodatkowo tzw. `arrow functions`? Moze uporządkujmy to sobie. Funkcje mozemy podzielić na:

- *function declaration* https://developer.mozilla.org/pl/docs/Web/JavaScript/Reference/Statements/function 

```
function timesTwo(params) { 
  return params * 2
}
```

- *function expression* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function 

```
const timesTwo = function(params) { 
  return params * 2
}
```


- *arrow function* https://www.w3schools.com/js/js_arrow_function.asp


```
let timesTwo = params => {
  return params * 2
} 
```
albo nawet:

```
let timesTwo = params => params * 2;

```


Główna róznica między dwoma pierszymi jest taka, ze w function expression mozemy ominąć function name, i tym samym utworzyć tzw anonimową funkcję przypisaną do zmiennej. Arrow function zaś jest zdecydowanie krótsza w zapisie, a takze `this` wewnątrz tej funkcji jest powiązane leksykalnie, to znaczy 
uzywa `this` z kodu, który zawiera arrow function, w przeciwienstwie do zwyklych funkcji (declarations and expressions), które uzywaja
`this` z miejsca wywolania. 

Sprawdzmy:

```

var obj = {
  id: 42,
  counter: function counter() {
    setTimeout(function() {
      console.log(this.id);
    }, 1000);
  }
};

```

Mamy obiekt, i jego metodę w której chcemy wylogować `id` tego obiektu w po upływie okreslonego czasu
Zobacz (https://www.w3schools.com/jsref/met_win_settimeout.asp) Wywołaj swój kod i sprawdź jaki wynik otrzymasz.



## Zadania

1. Sprawdź wynik wywołania Twojej funkcji w polu counter w obiekcie `obj`. 
Przerób anonimową funkcję wewnątrz setTimeout na funkcję arrow function. Ponownie sprawdź wynik w konsoli. 

2. Napisz arrow function, która przyjmuje dwa parametery: płeć i wiek, i zwraca true, jeśli przekazane dane dotyczą kobiety po 18 roku zycia i false w innym przypadku.

3. Napisz funkcję `checkSpam(str)`, która zwróci true, jeśli str będzie zawierał słowo `spam` albo `XXX` lub `false` w innym przypadku. 
Uzyj JS funkcji `includes()`https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes 

4.  Utwórz funkcję `readNumber` która pyta uzytkownika (uzywajac prompt()) o podanie numeru do momentu az nie poda wartosci numerycznej (jeśli z jakiegoś powodu uzytkonik wpisze tekst, zapyta ponownie), a następnie zwróci przekazaną wartość jako `number`.
Uzytkownik moze rowniez zatrzymac proces klikajac `CANCEL`, wtedy funkcja powinna zwrócić `null`.

## Materiały

- angielsko - języczne

1. https://mayanovarini.medium.com/functions-in-javascript-declaration-expression-arrow-d6f907dc850a

- polsko - języczne

1. https://developer.mozilla.org/pl/docs/Web/JavaScript/Reference/Functions/Arrow_functions
2. https://developer.mozilla.org/pl/docs/Web/JavaScript/Guide/Functions



