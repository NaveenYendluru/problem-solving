// Conditional statements recap, largest number among three numbers using ternary operator,

let num1 = +prompt("enter a number");
let num2 = +prompt("enter a number");
let num3 = +prompt("enter a number");

let largest = (num1 > num2 && num1 > num3)? num1 : (num2 > num3)? num2 : num3;
console.log(largest);


//  For loop printing 1 to 10, 10 to 1.. by using different operators

for(let i = 10; i != 0; i--){
    console.log(i);
  }
  
  for(let i = 1; i != 11; i++){
    console.log(i);
  }



