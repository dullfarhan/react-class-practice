import React, { useState } from "react";
import ReactDOM from "react-dom";

function FavoriteColor() {
  const [c, dc] = useState("red");
  const [age, setAge] = useState(24);

  return (
    <>
      <h1 style={{ color: c }}>
        Not My favorite color is {c} and my age is {age}!
      </h1>
      <button
        type="button"
        onMouseOver={() => {
          dc("blue");
          setAge(age + 1);
        }}
      >
        Blue
      </button>
      <button type="button" onClick={() => dc("red")}>
        Red
      </button>
      <button type="button" onClick={() => dc("pink")}>
        Pink
      </button>
      <button type="button" onClick={() => dc("green")}>
        Green
      </button>
    </>
  );
}

export default FavoriteColor;
