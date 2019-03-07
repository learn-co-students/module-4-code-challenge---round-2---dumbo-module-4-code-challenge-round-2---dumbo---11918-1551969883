import React from "react"

const BeerDetail = props => {

  let catClick = () => {
    alert("MEOW")
  }

  return (
    <div className="beer-card">
      <img alt="" src={props.selected.image_url} />
      <p>{props.selected.description}</p>
      <img onClick={catClick}
        className="grumps"
        alt="grumps"
        src="https://i.guim.co.uk/img/static/sys-images/BOOKS/Pix/pictures/2013/5/30/1369907744604/Grumpy-Cat-008.jpg?width=300&quality=85&auto=format&fit=max&s=c9d3e88c4b154571225e2314590ca047"
      />
    </div>
  )
}

export default BeerDetail
