import React from "react";

const BeerDetail = (props) => {
  let { beer, clickHandler } = props;

  return (
    <div className="beer-card" onClick={clickHandler}>
      <img alt="" src={beer.image_url} />
      <p>{beer.description}</p>
    </div>
  );
};

export default BeerDetail;
