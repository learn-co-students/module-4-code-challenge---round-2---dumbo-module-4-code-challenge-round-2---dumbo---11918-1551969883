import React from "react";

const BeerItem = (props) => {
  let {beers,clickHandler}= props
  return (
    <li className="beer-item" onClick = {() => clickHandler(beers)}>
      {props.beers.name}
    </li>
  );
};

export default BeerItem;
