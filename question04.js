//Q4. Write a JavaScript function called calculateTax that takes an income as an argument and returns the
//amount of tax to be paid. Use a closure to handle different tax rates based on income ranges. Test the
//function with various incomes.
//ans:>>
// use a closure to handle different tax rates based on income ranges in the calculateTax function.
 //Here's how you can define and use this function:
 // Define the calculateTax function using a closure
function calculateTax() {
    return function(income) {
      let tax;
      if (income <= 10000) {
        tax = income * 0.1; // 10% tax for income up to $10,000
      } else if (income <= 20000) {
        tax = 10000 * 0.1 + (income - 10000) * 0.15; // 15% tax for income between $10,001 and $20,000
      } else if (income <= 50000) {
        tax = 10000 * 0.1 + 10000 * 0.15 + (income - 20000) * 0.2; // 20% tax for income between $20,001 and $50,000
      } else {
        tax = 10000 * 0.1 + 10000 * 0.15 + 30000 * 0.2 + (income - 50000) * 0.25; // 25% tax for income above $50,000
      }
      return tax;
    };
  }
  
  // Create an instance of the tax calculation function
  const calculate = calculateTax();
  
  // Test the function with various incomes
  const income1 = 8000;
  const income2 = 15000;
  const income3 = 30000;
  const income4 = 60000;
  
  console.log(`Tax for income $${income1}: $${calculate(income1)}`);
  console.log(`Tax for income $${income2}: $${calculate(income2)}`);
  console.log(`Tax for income $${income3}: $${calculate(income3)}`);
  console.log(`Tax for income $${income4}: $${calculate(income4)}`);
  