import React from "react";

const BeerItem = (props) => {
  let { beer, clickHandler } = props;

  return (
    <li className="beer-item" onClick={()=>clickHandler(beer)}>
      {beer.name}
    </li>
  );
};

export default BeerItem;
