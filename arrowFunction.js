// Normal Function
function sum(num1, num2){
  return num1 + num2;
}
const result = sum(33,3);
console.log(result);

// Variable Declare kore function

const sum2 = function(num3, num4){
  const result2 = num3 + num4;
  return result2;
}
console.log(sum2(3,3));

// Arrow Function 

const sum3 =(num5, num6)=>{
return num5 + num6;
}
console.log(sum3(2,4));

const divide =(n1, n2)=>{
  return n1 / n2;
}
console.log(divide(4, 2));

// Arrow Function in 1 line

const multiplication =(n3,n4)=>n3*n4;
console.log(multiplication(3,3));

// Multiple line e must be return korte hbe

// Function with Empty Parentheses
const test =()=>console.log('hi');
test()

// Function with without Parentheses
const substraction =x=>x*x;
console.log(substraction(4));

