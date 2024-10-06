import React from "react";

const EventDelegation = () => {
  const items = [
    { name: "Ball", count: 19 },
    { name: "Bat", count: 10 },
    { name: "Hat", count: 29 },
    { name: "Bottle", count: 56 },
    { name: "Beer", count: 220 },
  ];

  const handleClick = (e) => {
    const { target } = e;
    const capturedItem = target.getAttribute("data-id");
    console.log(capturedItem);
  };

  return (
    <div>
      <h1>EventDelegation</h1>
      <ul onClick={handleClick}>
        {items.map((item, index) => (
          <h3 key={index}>
            <li data-id={item.name}>{item.name}</li>
          </h3>
        ))}
      </ul>
    </div>
  );
};

export default EventDelegation;
