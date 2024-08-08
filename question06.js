//Q6. Write a JavaScript function called curry that takes a function as an argument and returns a curried
//version of that function. The curried function should accept arguments one at a time and return a new
//function until all arguments are provided. Then, it should execute the original function with all arguments.
//Test the curry function with a function that adds two numbers.
//ans:>>
// Define the curry function
function curry(fn) {
    // Get the number of arguments the original function expects
    const expectedArgs = fn.length;

    // Return a curried function
    return function curried(args) {
        // If enough arguments are provided, call the original function
        if (args.length >= expectedArgs) {
            return fn(args);
        }
        // Otherwise, return a new function that takes the remaining arguments
        return function (nextArgs) {
            return curried(args, nextArgs);
        };
    };
}

// Test the curry function with an example function
function add(a, b) {
    return a + b;
}

// Create a curried version of the add function
const curriedAdd = curry(add);

// Test the curried function
console.log(curriedAdd(5)(3)); // Output: 8
console.log(curriedAdd(1)(2)(3)); // Output: 6 (currying allows calling in stages)

// You can also call it in a single step if preferred
const add5 = curriedAdd(5);
console.log(add5(3)); // Output: 8
