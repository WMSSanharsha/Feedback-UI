import React, { useState } from "react";

function RatingSelect({ select }) {
  const [selected, setSelected] = useState(10);

  function handleChange(e) {
    setSelected(+e.currentTarget.value);
    select(selected);
  }
  return (
    <ul className="rating">
      <li>
        <input
          type="radio"
          id="num1"
          name="rating"
          value="1"
          onChange={handleChange}
          checked={selected === 1}
        />
        <label htmlFor="num1">1</label>
      </li>
    </ul>
  );
}

export default RatingSelect;
