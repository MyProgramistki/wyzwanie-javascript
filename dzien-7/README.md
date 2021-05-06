Cześć,

wczoraj rozmawiałyśmy o obiektach i o ich wewnętrznych metodach, nie wyjaśniłyśmy jednak czym te metody właściwie są. Metody to funkcje znajdujące się wewnątrz obiektu. No dobrze, więc czym są w takim razie funkcje? Funkcje są głównym budulcem 
kazdej aplikacji. Umozliwiają wielokrotne wywoływanie danego kodu bez powielania go.

Aby zdefiniować funkcję co do zasady uzywamy keyworda `function` (inaczej w przypadku tzw. arrow functions o czym pozniej)

```
function showMessage() {
  alert( 'Hello everyone!' );
}

``` 

Wewnątrz funkcji mozemy sobie zapisac wszystko co tylko chcemy. Wyobrazmy sobie, ze moglibyśmy mieć funkcję, która dodaje element do naszej strony. 
Będzie ona wyglądać tak:

```
function addElement() {
  // tworzy nowy element div
  // i daje jego zawartość
  newDiv = document.createElement("div");
  newDiv.innerHTML = "<h1>Hi there and greetings!</h1>";

  // add the newly created element and it's content into the DOM
  my_div = document.getElementById("org_div1");
  document.body.insertBefore(newDiv, my_div);
}
```

Aby zobaczyć, co zdefiniowaliśmy w naszej funkcji musimy ją wywolać, a robimy to w ten sposób:
`addElement()`, czyli po prostu umieszczamy nawiasy za funkcją.

Nasza funkcja moze tez przyjmować okreslone parametry, i wtedy, po zmodyfikowaniu poprzedniej funkcji moglaby wyglądać ona tak:

```
function addElement(text) {

  newDiv = document.createElement("div");
  newDiv.innerHTML = `<h1>${text}</h1>`;
  my_div = document.getElementById("org_div1");
  document.body.insertBefore(newDiv, my_div);
}
```

`addElement('Hi there and greetings');`

Wazna uwaga to słówko `return` w funkcjach. Oznacza to, ze po prostu funkcja zwraca nam coś, spójrz
na przykład:

```
function getName(name) {
  return `User name is ${name}`;
}

const userName = getName('Agata');
console.log(userName);
```

Analizując powyzszy kod linia po linii widzimy, ze na początku zdefiniowałyśmy funkcję, następnie przypisałyśmy wywołanie funkcji do stałej `const userName`, a następnie wyprintowałyśmy stałą userName w konsoli. Powinnyśmy zobaczyć w niej 
`User name is Agata`;


## Zadanie

1. Napisz podobną funkcję jak powyzej. Mozesz w niej tworzyć nowy element HTML za 
pomocą `document.createElement` albo po prostu wybierać, poprzez np. `document.getElementById()` czy korzystając z jakiegokolwiek innego selektora. Wazne, 
zeby wynik Twojego kodu pojawił się w przeglądarce :) 
2. Teraz napisz funkcję, która przyjmuje parametr `n = liczba`, będąca wiekiem uzytkownika, a następnie zwraca informację ile lat zostało mu jeszcze do ukończenia 100 lat.
3. Napisz 4 funkcje, które pobierają wartości z dwóch inputów a następnie kazda kolejna zwraca nam ich sumę, róznicę, wynik dzielenia i mnozenia. Czy wlasnie piszemy kalkulator ? Mozliwe :) Spróbuj stworzyć prosty formularz, podpiąć funkcję pod przyciski `+` `-` `*` `/` 


## Materiały

angielsko - języczne

1. https://javascript.info/function-basics
2. https://www.w3schools.com/js/js_functions.asp


### Rozwiązanie

Spójrz w plik `index.js`