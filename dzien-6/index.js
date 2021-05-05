const calculator = {
  a: 5,
  b: 6,
    sum() {
      return this.a + this.b
    },
  
    mul() {
      return this.a * this.b;
    },
  
    read() {
      console.log(this.a, this.b);
    }
  };

  const obj = {street: 'Jasne', phone: 235235, email: 'name@mail.com'};

  document.getElementById('first-paragraph').innerHTML = obj.email;


  const person = {
    firstName: "John",
    lastName: "Doe"
  };
  
  console.log(person.firstName);
  
  console.log(person.lastName)

  delete person.lastName;

  console.log(person.lastName)