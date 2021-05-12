document.getElementById('hider').onclick = function() {
  document.getElementById('text').hidden = true;
}


const button = document.getElementById('add-symbol-button');

function handler() {
  const value = document.getElementById('field').value;
  document.getElementById('result').innerHTML = `${value} PLN`
}

button.addEventListener('click', handler)