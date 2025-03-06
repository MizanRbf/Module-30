// Object Destructure
const student = {
  name: "Rakib",
  age: "23",
  status: "maried",
  religion: "Islam"
}
const {name,age,status,religion}=student;
console.log(age,status);


// Array Destructure
const person = ["Rakib", "sumon", {name:'Mizan'}, "Hero"];

const [a,b,c,d]= person;
console.log(a,d);