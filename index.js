// Define functions for basic math operations
function add(a, b) {
    return a + b;
  }
  
  function subtract(a, b) {
    return a - b;
  }
  
  function multiply(a, b) {
    return a * b;
  }
  
  function divide(a, b) {
    return a / b;
  }
  
  // Define functions for incrementing and decrementing
  function increment(n) {
    return ++n;
  }
  
  function decrement(n) {
    return --n;
  }
  
  // Define functions for parsing numbers
  function makeInt(string) {
    return parseInt(string, 10);
  }
  
  function preserveDecimal(string) {
    return parseFloat(string);
  }
  
  module.exports = { add, subtract, multiply, divide, increment, decrement, makeInt, preserveDecimal };
  