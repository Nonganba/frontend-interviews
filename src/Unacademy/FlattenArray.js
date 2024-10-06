import React from "react";

const FlattenArray = () => {
  let arr = [
    [1, 2],
    [3, 4],
    [5, 6, 7, 8],
    [12, 13, [15, 16]],
    [10, 11],
  ];

  const customFlat = (arr, depth) => {
    let res = [];
    arr.forEach((element) => {
      if (Array.isArray(element) && depth > 0) {
        let currRes = customFlat(element, depth - 1);
        res.push(...currRes);
      } else {
        res.push(element);
      }
    });
    return res;
  };

  let ans = customFlat(arr, 1);
  console.log(ans);

  return (
    <div>
      <h1>Flatten Array</h1>
    </div>
  );
};

export default FlattenArray;
