import React, { Component } from "react";
import BeerDetail from "../Components/BeerDetail"
import Search from "../Components/Search"
import BeerItem from "../Components/BeerItem"


class BeerContainer extends Component {

  state ={
    beers: []
  }


componentDidMount() {
  fetch('http://localhost:3001/beers')
  .then(res => res.json())
  .then(beers => this.setState({
    beers
  }))
}

clickHandler = () => {
  console.log('in beer container click handle')
}


  render() {
    let beerList = this.state.beers.map((beer) => {
      console.log({...beer})
      return <BeerItem clickHandler={this.clickHandler}key={beer.id} beer={beer}/>
    })
    return (
      <div>
        <Search />
        <br />
        <ul className="container">{beerList}</ul>
        <BeerDetail />
      </div>
    );
  }
}

export default BeerContainer;
