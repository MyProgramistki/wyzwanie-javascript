Cześć, 

dzisiaj wrócimy jeszcze do tematu obiektów przyjrzymy się odrobinkę zagadnieniu `this` w obiektach Javascript. Temat nie jest łatwy, a zarazem bardzo obszerny, ale na początek poczytamy jedynie o podstawach, więc nie przejmuj się jeśli nie wszystko będziesz rozumieć. 
I powtórzymy przy okazji trochę obiekty.


## Zadanie 

1. Utwórz pusty obiekt user, następnie dodaj pole name i surname z wartościami `john`, `smith`, potem zmień wartość name na `pete` a następnie usuń pole name z obiektu

2. W stworzonym powyzej obiekcie dodaj metodę, która zwracać będzie tekst składający się z imienia i nazwiska, czyli `john smith`. Przypomnij sobie konkatynację stringów, o której było wczoraj.

3.  Mając ponizszy obiekt 

```
let people = {
  John: 25,
  Ann: 40,
  Pete: 76
}

```

napisz funkcję, ktora będzie zwracać łączy wiek wszystkich osób z obiektu people.

3. Napisz funkcję, która zwróci obiekt z podwojoną wartością wszystkich pól numerycznych. 

Czyli mając taki obiekt: 

```
let person = {
  age: 20,
  friends: 5,
  name: "Ann"
};
```

`multiplyValues(menu);`

wywołując funkcję, chcemy uzyskać taki wynik: 

```
let person = {
  age: 40,
  friends: 10,
  name: "Ann"
};

```

4. Trudniejsze :) Wyobraź sobie, ze masz taki obiekt:

```
let counter = {
  count: 0,
  up() {
    this.step++;
  },
  down() {
    this.step--;
  },
};

```

Jeśli chcemy wywołać jego metody kilka razy to musimy zrobić coś takiego:

```
counter.up();
counter.up();
counter.down();

```

Nie jest to szczególnie efektywny sposób, czy da się zrobić tak, zeby wywolać je w łancuchu?
Jeśli zrobimy drobną modyfikację z `this` to jasne, ze tak. Spróbuj! :) 

`counter.up().up().down()`


## Materiały

- angielsko - języczne
1. https://javascript.info/object-methods
2. https://javascript.info/object#copying-by-reference


- polsko - języczne



### Rozwiązanie 

Spójrz proszę do pliku `index.js`. Jeśli potrzebujesz pomocy napisz do nas. 