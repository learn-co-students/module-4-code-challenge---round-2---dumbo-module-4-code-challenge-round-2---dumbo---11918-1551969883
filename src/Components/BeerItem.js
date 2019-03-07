import React from "react";

const BeerItem = (props) => {
  // console.log(props)
  return (
    <li className="beer-item" onClick={() => props.clickHandler(props.beer)}>
      {props.beer.name}
    </li>
  );
};

export default BeerItem;
