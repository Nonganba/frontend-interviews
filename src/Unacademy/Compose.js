import React from "react";

const Compose = () => {
  const add = (a) => {
    return a + 100;
  };

  const sub = (a) => {
    return a - 2;
  };

  const mul = (a) => {
    return a * 2;
  };

  const compose = (...functions) => {
    return (args) => {
      return functions.reduceRight((arg, fn) => fn(arg), args);
    };
  };

  console.log(compose(add, sub, mul)(1000));

  const evaluate = compose(add, sub, mul);
  console.log(evaluate(5));

  return (
    <div>
      <h1>Compose polyfill</h1>
    </div>
  );
};

export default Compose;
