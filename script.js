const timer = document.querySelector("#time span");
const inputs = document.querySelectorAll("input");
const label = document.querySelector("p");
const button = document.querySelector(".add");
button.addEventListener("click", onClick);

setInterval(() => {
  timer.innerText = new Date().toLocaleString();
}, 1000);

function startTrail() {
  const aValue = 100;
  b();
}

function b() {
  const bValue = 100;
  d();
}

function d() {
  const dValue = 100;
  f();
}

function f() {
  console.log("DONE!");
  const luck = Math.random();

  if (luck > 0.5) {
    try {
      throw new error("Luck isnt on your side");
    } catch {
      console.log("Prevented an oopsie");
    }
  }
}

function onClick() {
  if (inputsAreEmpty()) {
    label.textContent = "Error: one or both inputs are empty.";
    return;
  }
  updateLabel();
}
function inputsAreEmpty() {
  if (getNumber1() === "" || getNumber2() === "") {
    return true;
  } else {
    return false;
  }
}
function updateLabel() {
  var addend1 = getNumber1();
  var addend2 = getNumber2();
  var sum = addend1 + addend2;
  label.textContent = addend1 + " + " + addend2 + " = " + sum;
}
function getNumber1() {
  return inputs[0].value;
}
function getNumber2() {
  return inputs[1].value;
}
