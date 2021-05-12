var obj = {
  id: 42,
  counter: function counter() {
    setTimeout(() => {
      console.log(this.id);
    }, 1000);
  }
};

obj.counter();


const verifySexAndAge = (age, sex) => {
  if (sex === 'female' && age >= 18) {
    return true;
  } else {
    return false;
  }
}

function checkSpam(str) {
  let lowerStr = str.toLowerCase();

  return lowerStr.includes('spam') || lowerStr.includes('xxx');
}


function readNumber() {
  let num;

  do {
    num = prompt("Enter a number please?", 0);
  } while ( !isFinite(num) );

  if (num === null || num === '') return null;

  return +num;
}

alert(`Read: ${readNumber()}`);

console.log(this);