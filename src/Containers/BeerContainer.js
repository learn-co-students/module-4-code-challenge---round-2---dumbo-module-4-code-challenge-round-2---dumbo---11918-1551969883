import React, { Component } from "react";
import BeerItem from "../Components/BeerItem"
import Search from "../Components/Search"
import BeerDetail from "../Components/BeerDetail"

class BeerContainer extends Component {


state ={
  beers: [],
  filteredBeers: [],
  favoriteBeers:[],
  searchTerm: ""
}



componentDidMount (){
  fetch( 'http://localhost:3001/beers')
  .then(resp => resp.json())
  .then(beers => this.setState({
    beers,
    filteredBeers:beers
  }))
}



changeHandler = (e) => {
  let term = e.target.value.toLowerCase();
  let newArray = [...this.state.beers].filter(beer => beer.name.toLowerCase().includes(term.toLowerCase()))
  console.log("term",e.target.value);

    this.setState({
      searchTerm:term,
      filteredBeers: newArray
    })
}

removeBeerHandler = beerObj =>{
  console.log("SUP");
  let removeBeer =[...this.state.favoriteBeers].filter(beer => beer.id !== beerObj.id
  );
  this.setState({
    favoriteBeers:removeBeer
  });
}

addBeerHandler = (beerObj) =>{
  console.log("bookies",beerObj);
  let filtered =  [...this.state.favoriteBeers,beerObj]
    // if(this.state.favoriteBeers)
    this.setState({
      favoriteBeers: filtered
    })

}






  render() {
    let beerList = this.state.beers.map(beers => <BeerItem key={beers.id} beers={beers}  clickHandler ={this.addBeerHandler} />)
console.log(this.state.beers);
    return (
      <div>
        <Search value ={this.state.searchTerm} changeHandler = {this.changeHandler}/>
        <br />
        <ul className="container">{beerList}</ul>
        <BeerItem  clickHandler ={this.addBeerHandler} beers={this.state.beers} favoriteBeers={this.state.filteredBeers} />
        <BeerDetail   clickHandler ={this.removeBeerHandler} beers={this.state.beers} favoriteBeers={this.state.filteredBeers} />
      </div>
    );
  }
}

export default BeerContainer;
