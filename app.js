const person = {
  'first name': 'Adam',
  age: 27,
  hobbies: ['tennis', 'reading'],
  greet: function() {
    alert('Hi there!');
  }
};

console.log(person);

//adding properties
person.isAdmin = true;
console.log(person);

//modifying properties
person.age = 28;
console.log(person);

//deleting properties
delete person.age;
person.greet = undefined; //not recommended to assing properties/variables to undefined
person.hobbies = null;
console.log(person);

//bracket notation
console.log(person['first name']);
