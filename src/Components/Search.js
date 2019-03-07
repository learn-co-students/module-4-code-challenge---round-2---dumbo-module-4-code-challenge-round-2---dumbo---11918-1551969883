import React from "react"

class Search extends React.Component {
  state = {
    inputValue: ""
  }

  onChangeHandle = e => {
    this.setState({
      inputValue: e.target.value
    })
    this.props.getInput(e.target.value)
  }

  render() {
    return (
      <form className="search">
        <input className="beer-form"
          onChange={this.onChangeHandle}
          type="search"
          placeholder="SEARCH FOR BEER!"
          value={this.state.inputValue}
        />
      </form>
    )
  }
}

export default Search
