import React from "react";

const Throttling = () => {
  function makeThrottle(callback, interval) {
    let last = 0;
    return function (...args) {
      let now = new Date().getTime();
      if (now - last < interval) return;
      last = now;
      return callback(...args);
    };
  }

  const handleCLick = (e) => {
    console.log("clicked");
  };

  const throttledClick = makeThrottle(handleCLick, 1000);

  return (
    <div>
      <h1>Throttling</h1>
      <button onClick={throttledClick}>Click Me</button>
    </div>
  );
};

export default Throttling;
