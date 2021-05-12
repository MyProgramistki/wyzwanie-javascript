Cześć,

dzisiaj popatrzymy trochę na przeglądarkowe eventy.

`Event` - jest takim  sygnałem, ze coś wydarzylo się na stronie (np. ze nasz uzytkownik kliknął
przycisk),  w zasadzie wwszystkie elementy na stronie mogą generować takie sygnały. I nie tylko elementy. Eventem moze być tez np. ruch myszką, ustawienie focusa na danym elemencie. 


`Handler` - zeby zareagować na event, innymi słowy właściwie go obsłuzyć, musimy dodac tzw handler. 
Handler to po prostu funkcja, która zostaje uruchomiona w momencie wystąpienia eventu. Wewnątrz
tej funkcji moze dodać poządane zachowanie (czyli co ma się wydarzyć gdy np. nasz uzytkownik wypełni
formularz i kliknie pole submit)

Mamy trzy sposoby przypinania handlerów pod określone zdarzenia

1. HTML attribute, czyli coś co juz znamy, onclick przypięty do elementu

`<input value="Click me" onclick="alert('Click!')" type="button">`

2. Wykorzystując element HTML

```
<input type="button" id="button" value="Button">
<script>
  document.getElementById9('button').onclick = function() {
    alert('Click!');
  };
</script>
```

3. `addEventListener`

```
<input id="elem" type="button" value="Click me"/>
<script>
function handler() {
  console.log('here')
}
</script>

elem.addEventListener(`click', handler);
```


## Zadanie
1. Napisz funkcję Javascript, która zostanie uruchomiona na kliknięcie przycisku i 
spowoduje ukrycie jakiegoś sfragmentu strony np. `<div z id="container"></div>`
Spróbuj podpiąć event wykorzystując 2 sposób (a najlepiej zrob to samo kazdym!)

2. Napisz `handler`, który będzie dokładał do dodanej przez uzytkownika wartosci 
symbol `PLN`. Handler przypnij korzystając z `addEventListener`

Add JavaScript to the button to make <div id="text"> disappear when we click it.



### Materiały

1. angielsko - języczne

- https://javascript.info/introduction-browser-events
- https://www.w3schools.com/js/js_htmldom_events.asp
- https://www.w3schools.com/js/js_htmldom_eventlistener.asp

2. polsko - języczne

- https://developer.mozilla.org/pl/docs/Web/API/Event


### Rozwiązanie

Sprawdz plik `index.js`, a takze `index-rozwiazanie.html` W razie problemów skontaktuj się z nami. 
