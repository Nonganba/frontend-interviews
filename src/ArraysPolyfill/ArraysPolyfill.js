import React from "react";

const ArraysPolyfill = () => {
  const arr = ["ball", "bat", "hat", "mat", "cat"];

  // map polyfill
  Array.prototype.myMap = function (callback) {
    let temp = [];
    for (let i = 0; i < this.length; i++) {
      temp.push(callback(this[i], i, this));
    }
    return temp;
  };
  const customMappedArr = arr.myMap((element, index, arr) => {
    return { name: element, index: index };
  });
  console.log(customMappedArr);

  // filter polyfill
  Array.prototype.myFilter = function (callback) {
    let temp = [];
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) temp.push(this[i]);
    }
    return temp;
  };
  const customFilteredArr = arr.myFilter((element, index) => {
    if (element.startsWith("b")) return true;
    return false;
  });
  console.log(customFilteredArr);

  // reduce polyfill
  const nums = [1, 2, 3, 4, 5];
  Array.prototype.myReduce = function (callback, acc) {
    for (let i = 0; i < this.length; i++) {
      acc = acc ? callback(acc, this[i], i, this) : this[i];
    }
    return acc;
  };
  const customReducedNum = nums.reduce((acc, num) => {
    return num + acc;
  }, 0);
  console.log(customReducedNum);

  return (
    <div>
      <h1>ArraysPolyfill</h1>
    </div>
  );
};

export default ArraysPolyfill;
