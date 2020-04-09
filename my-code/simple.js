// we have an issue where out function is adding rather than subtracting
// Let's right a test so that this does not surface again

const sum = (a, b) => a - b;
const subtract = (a, b) => a - b;

// an automated test in javascript is code that throws an error when things are unexpected
// this is the most fundamental form of a test
// The goal of any testing framework is to provide useful error messages so that we can fix ht problem as quickly as possible
let result = sum(3, 7);
let expected = 10;

// if (result !== expected) {
//   // node js-testing-fundamentals/my-code/simple.js
//   throw new Error(`${result} is not equal to ${expected}`);
// }

// if we were to abstract:

// This function is like an assertion library
function expect(actual) {
  // return an object that has some assertions on it
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`);
      }
    },
  };
}

expect(result).toBe(expected);

// Testing framework
// this function is like making our testing framework
function test(title, callback) {
  try {
    callback();
    console.log(title);
  } catch (error) {
    console.error(title);
    console.error(error);
  }
}

test("sum adds numbers", () => {
  result = sum(3, 7);
  expected = 10;
  expect(result).toBe(expected);
});
