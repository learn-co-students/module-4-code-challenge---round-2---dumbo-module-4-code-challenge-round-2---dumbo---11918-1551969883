import React, { Component } from "react";
import BeerDetail from "../Components/BeerDetail"
import Search from "../Components/Search"
import BeerItem from "../Components/BeerItem"


class BeerContainer extends Component {

  state ={
    beers: [],
    clickedBeer: {},
    searchTerm: '',
    filteredBeers: []
  }


componentDidMount() {
  fetch('http://localhost:3001/beers')
  .then(res => res.json())
  .then(beers => this.setState({
    beers,
    filteredBeers: beers
  }))
}

clickHandler = (val) => {
  console.log('clicked',val)
  this.setState({
    clickedBeer: val
  })
}

handleChange =  (e) => {
  console.log(e.target.value)
  let beers = [...this.state.beers].filter(beer => beer.name.toLowerCase().includes(e.target.value.toLowerCase()))
  this.setState({
    searchTerm: e.target.value,
    filteredBeers: beers
  })
    // let cars = this.state.beers.filter(beer => beer.name.toLowerCase().includes(this.state.searchTerm))
}




  render() {
    let beerList = this.state.filteredBeers.map((beer) => {
      // console.log({...beer})
      return <BeerItem clickHandler={this.clickHandler}key={beer.id} beer={beer}/>
    })
    return (
      <div>
        <Search value={this.state.searchTerm} handleInputChange={this.handleChange}/>
        <br />
        <ul className="container">{beerList}</ul>
        <BeerDetail beer={this.state.clickedBeer} />
      </div>
    );
  }
}

export default BeerContainer;
