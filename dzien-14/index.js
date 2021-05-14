// To oznacza, ze funkcja zostaje wywołana automatycznie na init

(function(){

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ]; 


const usersNames = [];

var ul = document.createElement('ul');

document.getElementsByTagName('body')[0].appendChild(ul);

users.forEach(renderNamesList);

function renderNamesList(user, index, arr) {
    var li = document.createElement('li');

    li.innerHTML = user.name
    ul.appendChild(li);
}


const paragrafs = [
  'First',
  'Second',
  'Third'
]
function createDiv(data) {
 
  var div = document.createElement('div');
  document.getElementsByTagName('body')[0].appendChild(div);

  data.forEach((paragraf => {
    var p = document.createElement('p');
    p.innerHTML = paragraf;
    div.appendChild(p);
  }))
}

createDiv(paragrafs);

})()


