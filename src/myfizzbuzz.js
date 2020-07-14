"use strict";

function fizzBuzz() {
  for (let i = 1; i <= 100; i = i + 1) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz");
    }
    else if (i % 5 === 0) {
      console.log("buzz");
    }
    else if (i % 3 === 0) {
      console.log("fizz");
    } else {
      let a = i.toString();
      console.log(a);
    }
  }
}

fizzBuzz();
