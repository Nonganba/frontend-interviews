import React from "react";

const debouncing = () => {
  const myDebounce = (cb, delay) => {
    let timer;
    return function (...args) {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        cb(...args);
      }, delay);
    };
  };

  const handleChange = myDebounce((e) => {
    console.log(e.target.value);
  }, 1000);

  return (
    <div>
      <h1>Debouncing</h1>
      <input type="text" onChange={(e) => handleChange(e)} />
    </div>
  );
};

export default debouncing;
