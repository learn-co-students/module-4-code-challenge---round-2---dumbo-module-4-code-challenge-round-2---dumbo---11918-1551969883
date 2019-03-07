import React from "react";

const Search = (props) => {
  let { changeHandler, input } = props;

  return (
    <form className="search">
      <input type="text" name="beer_name" value={input} onChange={changeHandler}/>
    </form>
  )
};

export default Search;
