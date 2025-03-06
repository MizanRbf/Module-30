// for in

const person = {
  name: 'Sakib',
  age: '23',
  status: 'married',
  country: 'Bangladesh'
}
console.log(person.name);
console.log(person['age']);

for(let key in person){
  console.log(`key: ${key} value: ${person[key]}`)
}

// for of loop
for(let [key,value] of Object.entries(person)){
  console.log(`key: ${key}, value: ${value}`);
}
