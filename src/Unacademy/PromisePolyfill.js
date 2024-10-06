import React from "react";

const PromisePolyfill = () => {
  const showText = (text, time) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(text);
      }, time);
    });
  };

  const promise1 = showText("1st promise", 3000);
  const promise2 = Promise.resolve("2nd promise");
//   const promise3 = Promise.reject("bye");

  // inbuilt Promise.all
  Promise.all([promise1, promise2])
    .then((value) => console.log(value))
    .catch((error) => console.log(error, "herererer"));

  // my custom Promise.all polyfill
  const myPromiseAll = (promises) => {
    let result = new Array(promises.length);
    let completedPromises = 0;
    return new Promise((resolve, reject) => {
      promises.forEach((promise, index) => {
        promise
          .then((value) => {
            result[index] = value; //store the results in order
            completedPromises += 1;
            if (completedPromises === promises.length) {
              // only resolve when all promises are resolved
              resolve(result);
            }
          })
          .catch((err) => reject(err));
      });
    });
  };

  myPromiseAll([promise1, promise2])
    .then((value) => console.log(value))
    .catch((error) => console.log(error, "Promise rejected"));

  return (
    <div>
      <h1>PromiseAll polyfill</h1>
    </div>
  );
};

export default PromisePolyfill;
