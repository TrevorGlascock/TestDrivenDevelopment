function addNumbers(...numbers) {
  return numbers.reduce((total, number) => {
    number = parseInt(number);
    if (isNaN(number)) return (total = "Not a number");
    return total + number;
  }, 0);
}

//test to see function adds two numbers
//test to see addNumbers(4,6) = 10
function test1() {
  console.log("Testing to see if the function adds two numbers correctly");
  const num1 = 4;
  const num2 = 6;
  const expectedResult = 10;

  const actualResult = addNumbers(num1, num2);

  const message =
    actualResult === expectedResult
      ? `Test Passed: Result is ${actualResult}`
      : `This value is incorrect, expected ${actualResult} to be ${expectedResult}`;
  console.log(message, "\n");
}

//test for single parameter
//test to see addNumbers(5) = 5
function test2() {
  console.log("Testing to see if the function still works with one parameter");
  const num1 = 5;
  const expectedResult = 5;

  const actualResult = addNumbers(num1);
  const message =
    actualResult === expectedResult
      ? `Test Passed: Result is ${actualResult}`
      : `This value is incorrect, expected ${actualResult} to be ${expectedResult}`;
  console.log(message, "\n");
}
//test for 3 parameters
//test to see addNumbers(5,6,7) = 18
function test3() {
  console.log("Testing to see if the function still works with 3 parameters");
  const num1 = 5;
  const num2 = 6;
  const num3 = 7;
  const expectedResult = 18;

  const actualResult = addNumbers(num1, num2, num3);
  const message =
    actualResult === expectedResult
      ? `Test Passed: Result is ${actualResult}`
      : `This value is incorrect, expected ${actualResult} to be ${expectedResult}`;
  console.log(message, "\n");
}

//test for more than 3 parameters
//test to see addNumbers(5,6,7,8,1,3) = 30
function test4() {
  console.log(
    "Testing to see if the function still works with more than 3 parameters"
  );
  const num1 = 5;
  const num2 = 6;
  const num3 = 7;
  const num4 = 8;
  const num5 = 1;
  const num6 = 3;
  const expectedResult = 30;

  const actualResult = addNumbers(num1, num2, num3, num4, num5, num6);
  const message =
    actualResult === expectedResult
      ? `Test Passed: Result is ${actualResult}`
      : `This value is incorrect, expected ${actualResult} to be ${expectedResult}`;
  console.log(message, "\n");
}

//test for stringified numbers as parameters
//test to see addNumbers("4","5")
function test5() {
  console.log(
    "Testing to see if the function adds two stringified numbers correctly"
  );
  const num1 = "4";
  const num2 = "5";
  const expectedResult = 9;

  const actualResult = addNumbers(num1, num2);

  const message =
    actualResult === expectedResult
      ? `Test Passed: Result is ${actualResult}`
      : `This value is incorrect, expected ${actualResult} to be ${expectedResult}`;
  console.log(message, "\n");
}
//test for actual strings as parameters
//test to see addNumbers("four","five") should return not a number
function test6() {
  console.log(
    "Testing to see if the function returns Not a number when given unparsable strings"
  );
  const num1 = "four";
  const num2 = "five";
  const expectedResult = "Not a number";

  const actualResult = addNumbers(num1, num2);

  const message =
    actualResult === expectedResult
      ? `Test Passed: Result is ${actualResult}`
      : `This value is incorrect, expected ${actualResult} to be ${expectedResult}`;
  console.log(message, "\n");
}

//test for booleans as parameters
//test to see addNumbers(true,false) should return not a number
function test7() {
  console.log(
    "Testing to see if the function returns Not a number when given two booleans"
  );
  const num1 = true;
  const num2 = false;
  const expectedResult = "Not a number";

  const actualResult = addNumbers(num1, num2);

  const message =
    actualResult === expectedResult
      ? `Test Passed: Result is ${actualResult}`
      : `This value is incorrect, expected ${actualResult} to be ${expectedResult}`;
  console.log(message, "\n");
}

test1();
test2();
test3();
test4();
test5();
test6();
test7();
