import React, { Component } from "react"
import BeerItem from "../Components/BeerItem"
import BeerDetail from "../Components/BeerDetail"
import Search from "../Components/Search"

class BeerContainer extends Component {
  state = {
    beers: [],
    selected: {},
    inputValue: ""
  }

  componentDidMount() {
    fetch("http://localhost:3001/beers")
      .then(res => res.json())
      .then(beers => this.setState({ beers }))
  }

  beersMapped = () => {
    return this.state.beers
      .filter(beer =>
        beer.name.toLowerCase().includes(this.state.inputValue.toLowerCase())
      )
      .map(beer => (
        <BeerItem key={beer.id} beer={beer} beerSelect={this.beerSelect} />
      ))
  }

  beerSelect = beer => {
    this.setState({
      selected: beer
    })
  }

  getInput = inputValue => {
    this.setState({
      inputValue
    })
  }

  render() {
    console.log(this.state.inputValue)
    return (
      <div>
        <h1 className="colorWave">
          BEER BEER BEER BEER BEER BEER BEER BEER BEER BEER BEER BEER BEER{" "}
        </h1>
        <marquee>😸😸😸😸😸 HAHAHHAHAHAHAHAH BEER BEER BEER BEER BEER HAHAHAHAHAHAH!!😸😸😸😸😸</marquee>
        <marquee>😸😸😸😸😸 HAHAHHAHAHAHAHAH BEER BEER BEER BEER BEER HAHAHAHAHAHAH!!😸😸😸😸😸</marquee>
        <marquee>😸😸😸😸😸 HAHAHHAHAHAHAHAH BEER BEER BEER BEER BEER HAHAHAHAHAHAH!!😸😸😸😸😸</marquee>
        <Search getInput={this.getInput} />
        <br />
        <ul className="container">{this.beersMapped()}</ul>
        <BeerDetail selected={this.state.selected} />
      </div>
    )
  }
}

export default BeerContainer
