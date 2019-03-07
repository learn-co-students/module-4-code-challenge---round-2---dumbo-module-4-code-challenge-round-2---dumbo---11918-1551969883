import React from "react";

const Search = (props) => {
  return <form className="search">
  <input
  placeholder="Search for Beer"
    onChange={props.handleInputChange}
    value={props.value}
/></form>;
};

export default Search;
