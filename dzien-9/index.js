let user =  {
  name: 'john',
  surname: 'smith',

}

user.name = 'pete';
delete user.name;

let people = {
  John: 25,
  Ann: 40,
  Pete: 76
}

function countAgeOfAll() {
  return people.John + people.Ann + people.Pete;
}

let ann = {
  age: 20,
  friends: 5,
  name: "Ann"
};

function createNewObjWithMultipliedValues(obj) {
  const newObj = {};
  newObj.name = obj.name;
  newObj.age = obj.age * 2;
  newObj.friends = obj.friends * 2
}

let monique = createNewObjWithMultipliedValues(ann);
