import React from "react";

const currying = () => {
  // Q1. currying sum(a, b, c)
  function sum(a) {
    return function (b) {
      return function (c) {
        return a + b + c;
      };
    };
  }
  //   console.log("basic sum curry --> ", sum(1)(2)(3));

  // Q2. Infinite currying sum(a)(b)(c)......(n)
  function infiniteSum(a) {
    return function (b) {
      if (b) return infiniteSum(a + b);
      return a;
    };
  }
  //   console.log("infinite curry --> ", infiniteSum(1)(2)(3)(5)());

  // Q3. Curry with single/multiple args in one step sum(1)(2)(3)(4,5)(6)
  function multipleArgsSum(...args) {
    let total = args.reduce((acc, current) => {
      return acc + current;
    }, 0);

    return function (...args) {
      if (args.length > 0) {
        args.push(total);
        return multipleArgsSum(...args);
      }
      return total;
    };
  }
  //   console.log(multipleArgsSum(1, 2, 3)(4, 5)(6)(7)(8, 9)());

  // Q4. make f(1,2,3) into f(1)(2)(3) --> asked in Senior FE
  function curry(func) {
    return function curriedFunc(...args) {
      if (args.length >= func.length) {
        return func(...args);
      }
      return function (...next) {
        return curriedFunc(...args, ...next);
      };
    };
  }

  const mul = (a, b, c, d) => a * b * c * d;
  const curriedMul = curry(mul);
  console.log(curriedMul(1)(2)(3)(4));

  return (
    <div>
      <h1>currying</h1>
    </div>
  );
};

export default currying;
