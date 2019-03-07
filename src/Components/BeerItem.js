import React from "react";

const BeerItem = (props) => {
  console.log(props)
  return (
    <li className="beer-item" onClick={props.clickHandler}>
      {/* beer name goes here */}
    </li>
  );
};

export default BeerItem;
