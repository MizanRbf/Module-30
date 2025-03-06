const person = {
  name:'hena',
  age: 23,
  status: 'maried'
}
// New property won't be added but Value will be changed by using 'Seal'
Object.seal(person);
person.religion = 'Islam';
person.age = 33;
// New property and Value both won't be changed by using "freeze"
Object.freeze(person);
person.status = 'unmarried';

console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));