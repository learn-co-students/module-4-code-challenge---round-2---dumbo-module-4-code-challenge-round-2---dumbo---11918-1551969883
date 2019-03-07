import React from "react";

const BeerDetail = (props) => {
  let {beers}=props
  console.log("props",props);
  return (
    <div className="beer-card">
      <img alt="" src={props.beers.image_url} />
      <p>{props.beers.description}</p>
    </div>
  );
};

export default BeerDetail;
