// import files
var add = require('./calculator/add')
var subtract = require('./calculator/subtract')
var multiply = require('./calculator/multiply')
var divide = require('./calculator/divide')


// Test Case 1 (Addition)
test("Should add two numbers", () => {
  expect(add(25, 10)).toBe(35);
});

// Test Case 2 (Subtraction)
test("Should subtract two numbers", () => {
  expect(subtract(25, 10)).toBe(15);
});

// Test Case 3 (Multiplication)

test("Should multiply two numbers", () => {
  expect(multiply(25, 10)).toBe(250);
});


// Test Case 4 (Division)

test("Should divide two numbers", () => {
  expect(divide(10, 2)).toBe(5);
});