/*function addNumbers(x = 0, y = 0) {
  //check number of args
  if (typeof x === "number" || typeof y === "number") return x + y;
  return "Not a number";
}*/
//account for more than 2
function addNumbers(...numbers) {
  return numbers.reduce((total, number) => {
    if (typeof number === "number") return total + number; //This will not work yet, still refactoring
    return (total = "Not a number");
  }, 0);
}

function test1() {
  const num1 = 4;
  const num2 = 6;
  const expectedResult = 10;

  const actualResult = addNumbers(4, 6);

  //Test to see value
  if (actualResult === expectedResult)
    console.log(`Test Passed: Result is ${actualResult}`);
  else console.log("This value is incorrect");
}

function test2() {
  const num1 = 5;
  const expectedResult = 5;

  const actualResult = addNumbers(num1);
  const message =
    actualResult === expectedResult
      ? `Test Passed: Result is ${actualResult}`
      : `This value is incorrect`;
  console.log(message);
}

function test3() {
  const num1 = 5;
  const num2 = 6;
  const num3 = 7;
  const expectedResult = 18;

  const actualResult = addNumbers(num1, num2, num3);
  const message =
    actualResult === expectedResult
      ? `Test Passed: Result is ${actualResult}`
      : `This value is incorrect, expected ${actualResult} to be ${expectedResult}`;
  console.log(message);
}

function test4() {
  const num1 = 5;
  const num2 = 6;
  const num3 = 7;
  const num4 = 8;
  const expectedResult = 26;

  const actualResult = addNumbers(num1, num2, num3, num4);
  const message =
    actualResult === expectedResult
      ? `Test Passed: Result is ${actualResult}`
      : `This value is incorrect, expected ${actualResult} to be ${expectedResult}`;
  console.log(message);
}

//test1();
//test2();
//test3();
test4();
