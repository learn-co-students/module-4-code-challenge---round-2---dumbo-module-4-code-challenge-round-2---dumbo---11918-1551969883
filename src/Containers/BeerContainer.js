import React, { Component } from "react";
import Search from '../Components/Search';
import BeerDetail from '../Components/BeerDetail'
import BeerItem from '../Components/BeerItem'

class BeerContainer extends Component {
  state = {
    beers: [],
    filteredBeers: [],
    clickedBeer: {},
    searchTerm: ""
  }

  componentDidMount() {
    fetch('http://localhost:3001/beers')
      .then(res => res.json())
      .then(beers => this.setState({
        beers: beers,
        filteredBeers: beers
      }))
  }

  // Takes the beer obj that was passed up and saves it into state
  clickHandler = (beerObj) => {
    this.setState({
      clickedBeer: beerObj
    })
  }

  // Upon click (on shown beer obj), removes beer obj from detail pane
  removeHandler = () => {
    this.setState({
      clickedBeer: {}
    })
  }

  // 1. Creates a new array of beers whose names includes the input value
  // 2. Sets the state of searchTerm to user's input
  // 3. Sets the state of 'filteredBeers' to this new array
  changeHandler = (event) => {
    let newBeerArr = this.state.beers.filter(beerObj => {
      return beerObj.name.toLowerCase().includes(event.target.value.toLowerCase())
    })
    this.setState({
      searchTerm: event.target.value,
      filteredBeers: newBeerArr
    })
  }

  render() {
    let beerList = this.state.filteredBeers.map(beerObj => {
      return <BeerItem key={beerObj.id} beer={beerObj} clickHandler={this.clickHandler}/>
    })

    return (
      <div>
        <Search changeHandler={this.changeHandler} input={this.state.searchTerm}/>
        <br />
        <ul className="container">{beerList}</ul>
        <BeerDetail beer={this.state.clickedBeer} clickHandler={this.removeHandler}/>
      </div>
    );
  }
}

export default BeerContainer;
