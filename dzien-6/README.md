Cześć, 

przed nami szósty dzień wyzwania i kontynuacja wczorajszego tematu, z większym skupieniem na obiektach. Nie wchodząc na razie zbytnio w szczególy, Javascript 
umozliwia nam definiowanie obiektów. Pamiętasz obiekt ucznia z wczorajszego przykladu? No właśnie. Obiekty słuzą nam w Javascript do modelowania, i moze nimi być w zasadzie wszystko. 
Sam język posiada mnóstwo wbudowanych obiektów, które mozesz zobaczyć tutaj: https://developer.mozilla.org/pl/docs/Web/JavaScript/Reference/Global_Objects

Juz nieco pamiętamy jak wygląda obiekt, ale spójrz na przyklad:

```
let user = {
  name: "John",
  go: function() { alert(this.name) }
}

console.log(user.name);
console.log(user.go());

```

mozemy go stworzyć korzystając z wąsatych nawiasow, wtedy będzie to tzw. object literal, albo poprzez new keyword, czyli `let user = new Object()` (więcej na ten temat w materiałach)


## Zadanie

1. Utwórz obiekt `const obj = {}` z kilkoma polami np. street, phoneNumber, email, a następnie wyświetl wartość w `<div id="first-paragraf"></div>`. Pamiętasz jak to robiłyśmy na począ†ku wyzwania

2. Utwórz obiekt kalkulator z dwoma polami i trzema metodami:
		- pola: a, b
		- metody: read(), sum(), mul()

		Postaraj się aby Twoja metoda sum() zwracała sumę pól a i b. W materiałach ponizej znajdziesz przyklad jak to zrobić	

3. Mając taki obiekt

```
const person = {
  firstName: "John",
  lastName: "Doe"
};

```

skopiuj go do swojego pliku i wyprintuj w konsoli `firstName`

4. Pobaw się obiektami bazując na wiedzy, ktorą nabyłaś z udostępnionych materiałów. 
Spróbuj np. usunąć jedno z pól obiektu. Np. `lastName` z powyzszego obiektu person. 
Sprawdź, jeśli w konsoli zobaczysz `undefined` to znaczy, ze zrobilas dobrze. Mozesz przy okazji poczytać czym jest undefined. https://www.w3schools.com/jsref/jsref_undefined.asp


## Materiały

- angielsko - języczne

1. https://javascript.info/object
2. https://www.w3schools.com/js/js_object_definition.asp
3. https://www.w3schools.com/js/js_objects.asp
4. https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics

- polsko - języczne

1. https://developer.mozilla.org/pl/docs/Learn/JavaScript/Objects


### Rozwiązanie

Sprawdź plik `index.js`