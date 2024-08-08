//Q3. Create an IIFE (Immediately Invoked Function Expression) that calculates the square of a number and
//immediately displays the result.
//ans:>>
//IIFE Definition:
//The entire function is wrapped in parentheses () to make it a function expression.
//The function is immediately invoked by adding another set of parentheses () at the end, 
//passing the argument 5 (or any other value you want to test).
//Inside the function, num * num calculates the square of num, and console.log prints the result.
(function(num) {
    const square = num * num;
    console.log(`The square of ${num} is ${square}`);
  })(5); // You can change this number to any value you want to test
  