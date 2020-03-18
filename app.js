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

//shorthand property syntax
const title = 'The Dark Knight';
const releaseDate = 2008;

const movie = {
  title,
  releaseDate
};

console.log(movie);

//for in
for (const key in person) {
  console.log(key);
}

//spread operator
const person2 = {
  ...person,
  hobbies: [...person.hobbies, 'Cooking']
};
person2.age = 30;

console.log(person2);
console.log(person);

//object destructuring
const { age, hobbies: activities, ...otherProps } = person;

console.log(age);
console.log(activities);
console.log(otherProps);

//object assign
const person3 = Object.assign({}, person);

person3.age = 21;

console.log(person3);
console.log(person);

//checking property existence
if ('age' in person) {
  console.log('exists');
}

if ('name' in person) {
  console.log('doesnt exist');
}

if (person2.hobbies === undefined) {
  console.log('doesnt exist');
} else {
  console.log('exists');
}

//this
const obj = {
  info: {
    name: 'obj',
    created: 'today'
  },
  displayInfo: function() {
    console.log(this.info.name);
    console.log(this.info.created);
  }
};

obj.displayInfo();
