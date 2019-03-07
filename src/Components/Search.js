import React from "react";

const Search = props => {
  let {value,onChange} = props
  return (
<div>
    <form className="search">
<input  placeholder ="Search"onChange ={onChange}/>



    </form>
  </div>)
};

export default Search;
