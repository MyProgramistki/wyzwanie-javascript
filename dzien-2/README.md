Cześć, 

skoro wiemy juz jak i gdzie umieszczać nasz skrypt, a takze umiemy wypisać coś w 
konsoli przeglądarki albo bezpośrednio w oknie to zobaczmy dzisiaj w jaki sposób 
dynamicznie modyfikować zawartość naszych (dotychczas statycznych) stron.

Spójrz proszę na nasz plik `index.html`

Mamy tam fragment kodu `<p id="first-paragraph"></p>`

Zamiast statycznie umieszczać tekst pomiędzy tagami `<p>` jak robiłyśmy to dotychczas, a przynajmniej podczas naszego Wyzwania Walentynkowego, spróbujemy teraz wrzucić ten tekst dynamicznie. 

W tym celu pobierzemy sobie element korzystając z udostępnionej nam  przez Javascript funkcji czyli `document.getElementById()`, a następnie z pomocą `.innerHTML` dodamy tekst do naszej strony.

Nasz kod będzie wyglądał tak:

`document.getElementById('first-paragraph').innerHTML = "Mój pierwszy dynamiczny paragraf" `

Wykonaj to proszę u siebie. Fragment kodu mozesz umieścić albo bezpośrednio w pliku html w tagu 
`<script></script>`, albo w osobnym pliku `.js` (czyli tak jak uczyłyśmy się wczoraj) Sprawdź czy działa - 
tekst powinien być widoczny na stronie. 

## Zadanie

1. Przeczytaj https://www.w3schools.com/js/js_htmldom_html.asp (a przynajmniej obejrzyj przykłady :))
1. W pliku HTML dodaj przycisk a następnie umieść kod wskazany wyzej w `onclick`, aby tekst do tagu `<p></p>` dodawał się na kliknięcie przycisku.
2. Dodatkowo mozesz sprobować zmodymifkować kolor tła. Pamiętaj, zeby w tym celu
dodać atrybut `id` do tagu body , a następnie odwołać się do `style.backgroundColor` (przykład znajdziesz w materiałach wskazanych wyzej)
3. A teraz spróbuj ukryć drugi paragraf, skorzystaj z `style.display`
4. Poekperymentuj z innymi elementami i ich atrybutami. Zainspiruj się przykładami z materiałów. 

## Materiały

- angielsko - języczne

https://www.w3schools.com/js/js_htmldom_elements.asp
https://www.w3schools.com/js/js_htmldom_document.asp
https://javascript.info/searching-elements-dom

- polsko - języczne

Przejrzyj proszę przykłady na angielskich stronach podanych powyzej. 

### Rozwiązania

Sprawdź plik `index.js` i `index-rozwiazanie.html`

Czegoś nie rozumiesz, bądź utknęłaś? Napisz do nas https://www.facebook.com/groups/868937947010969 