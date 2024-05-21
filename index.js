const input1 = document.getElementById("input-1");
const input2 = document.getElementById("input-2");
const select = document.querySelector(".select");
const btn = document.querySelector("#btn");
const result = document.querySelector("#result");

const OPERATION = {
  sum: "+",
  sub: "-",
  mul: "*",
  div: "/",
};
function sum(a, b) {
  return a + b;
}
function sub(a, b) {
  return a - b;
}
function mul(a, b) {
  return a * b;
}
function div(a, b) {
  return a / b;
}
function calculate(a, b, operation) {
  let result = null;

  switch (operation) {
    case OPERATION.sum:
      result = sum(a, b);
      break;
    case OPERATION.sub:
      result = sub(a, b);
      break;
    case OPERATION.mul:
      result = mul(a, b);
      break;
    case OPERATION.div:
      result = div(a, b);
      break;
  }
  return result;
}

function handleClick() {
  const numberOne = parseInt(input1.value);
  const numberTwo = parseInt(input2.value);
  const operation = select.value;

  let getResult = calculate(numberOne, numberTwo, operation);
  result.innerHTML = getResult;
}

btn.addEventListener("click", handleClick);
