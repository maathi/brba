import React, { Component } from "react"
import "../styles/search.css"

class Search extends Component {
  handleChange = (event) => {
    this.props.setQuery(event.target.value)
  }

  render() {
    return (
      <div className="search">
        <input
          placeholder="Say my name..."
          type="text"
          value={this.props.query}
          onChange={this.handleChange}
        ></input>
      </div>
    )
  }
}

export default Search
