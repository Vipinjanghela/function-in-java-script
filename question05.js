//Q5. Write a JavaScript function called factorial that calculates the factorial of a non-negative integer using
//recursion. Test the function with different inputs.
//ans:>>
// Define the factorial function using recursion
function factorial(n) {
    // Base case: factorial of 0 is 1
    if (n === 0) {
      return 1;
    }
    // Recursive case: n * factorial of (n - 1)
    return n * factorial(n - 1);
  }
  
  // Test the function with different inputs
  console.log(factorial(0)); // Output: 1 (factorial of 0 is 1)
  console.log(factorial(1)); // Output: 1 (factorial of 1 is 1)
  console.log(factorial(5)); // Output: 120 (factorial of 5 is 120)
  console.log(factorial(7)); // Output: 5040 (factorial of 7 is 5040)
  console.log(factorial(10)); // Output: 3628800 (factorial of 10 is 3628800)
  