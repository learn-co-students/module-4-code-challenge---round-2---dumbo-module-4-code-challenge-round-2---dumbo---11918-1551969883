import React from "react"

const BeerItem = props => {
  let clickHandle = () => {
    props.beerSelect(props.beer)
  }

  return (
    <li className="beer-item" onClick={clickHandle}>
      {props.beer.name}
    </li>
  )
}

export default BeerItem
