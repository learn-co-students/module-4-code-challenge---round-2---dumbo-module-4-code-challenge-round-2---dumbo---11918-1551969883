import React from "react";

const Search = props => {
  let {value,changeHandler} = props
  return (
<div>
    <form className="search">
<input  placeholder ="Search" onChange ={changeHandler}/>



    </form>
  </div>)
};

export default Search;
