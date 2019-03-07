import React from "react";

const BeerDetail = (props) => {
  return (
    <div className="beer-card">
      <img alt="" src={props.beer.image_url} />
      <p>Name:{props.beer.name}</p>
      <p>TagLine:{props.beer.tagline}</p>

      <p>First Brewed:{props.beer.first_brewed}</p>
      <p>Description:{props.beer.description}</p>
      <p>Brewers Tips:{props.beer.brewers_tips}</p>
      <p>Contributions:{props.beer.contributed_by}</p>

    </div>
  );
};

export default BeerDetail;
