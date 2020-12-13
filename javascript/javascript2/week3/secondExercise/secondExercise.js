"use strict";

// fist and second part
const func1 = () => console.log("function 1 executed");
const func2 = () => console.log("function 2 executed");
function func3() {
  console.log("function 3 executed");
}

const funcArr = [func1, func2, func3];
for (const f of funcArr) {
  f();
}

// third part
const funcInObject = () => console.log("This function is inside an object");
const obj = {
  func: funcInObject,
};
obj.func();
