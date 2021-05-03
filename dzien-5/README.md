Cześć,



wczoraj poznawałyśmy sobie trochę typy proste w Javascript, lecz choć są one niewątpliwie niezbędną podstawą, to same typy proste do pisania aplikacji nie wystarczą musimy mieć nieco bardziej zaawansowane struktury. I takie struktury to 
np. array i object. 

W przypadku tablicy (array, listy) wyobraz sobie np. uczniów nalezacych do klasy, powiedzmy te 30 osób. 
Zeby opisać naszą klasę w Javascript potrzebujemy najpierw zdefiniować zmienną (tutaj `klasa`), a potem w tablicy umieścić jej wszystkie elementy. Spójrz na przyklad jak to zrobić. 

`let klasaMyProgramistki = ['Adam', 'Karol', 'Anna', 'Kamila']`

jak widzisz mamy na liście 4 osoby, które nalezą do naszej klasy. Jednak ta nasza lista wydaje się nieco odstawać od rzeczywistości, bo zawiera jedynie typ proste (string)
a w przypadku osób w realnym świecie kazdy oprócz imienia ma nie tylko nazwisko, ale tez wiek, miejsce zamieszkania itp. (oczywiście moglibyśmy zostawić listę taką jak jest, bo czasami imię to jedyne co nas interesuje, ale przyjmimy zalozenie, ze w tym przypadku potrzebujemy więcej informacji o kazdym uczniu) 

Mówiąc językiem Javascript potrzebujemy, aby kazdy element na naszej liście stał się obiektem. Zdefiniujmy go sobie 
ponizej. 

`let uczen1 = { name: 'Adam', surname: 'Kowalski', age: 25 }`

Tak, tak właśnie wygląda prosty obiekt. 

## Zadanie

1. Zamień tablicę stringów `klasaMyProgramistki` na tablicę obiektów zgodnie ze wzorem podanym powyzej
2. Przeczytaj o metodach w tablicach Javascript a następnie postaraj się dodać do tablicy nowy obiekt wykorzystując metodę `push`, lub `unshift` jeśli chcesz 
aby nowy element pojawił się na początku tablicy
3. Zdefiniuj własną tablicę z dowolnymi danymi dowolnego typu. 
4. Wyprintuj swój kod w konsoli :) (`console.log()`)

## Materiały

angielsko - języczne 

1. https://javascript.info/array 
2. https://www.w3schools.com/js/js_arrays.asp
3. https://www.w3schools.com/js/js_array_methods.asp
4. https://javascript.info/object
5. https://www.w3schools.com/js/js_objects.asp

polsko - języczne

1. https://developer.mozilla.org/pl/docs/Web/JavaScript/Reference/Global_Objects/Array
2. https://developer.mozilla.org/pl/docs/Web/JavaScript/Reference/Global_Objects

### Rozwiązania

Sprawdź plik `index.js`