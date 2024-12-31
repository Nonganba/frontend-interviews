import React from "react";

const CallApplyBind = () => {
  let person = {
    name: "John",
    age: 24,
  };

  function getInfo(greet) {
    console.log(this.name + "----->" + this.age + " " + greet);
  }

  getInfo.call(person, "good morning");

  // call polyfill
  Function.prototype.myCall = function (context = {}, ...args) {
    if (typeof this !== "function") {
      throw new Error(this + "It is not a Callable");
    }
    context.fn = this;
    context.fn(...args);
  };
  getInfo.myCall(person, "good night");

  return (
    <div>
      <h1>CallApplyBind</h1>
    </div>
  );
};

export default CallApplyBind;
