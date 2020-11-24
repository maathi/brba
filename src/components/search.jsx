import React, { Component } from "react"
import "../styles/search.css"
class Search extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log("query in search:", this.props.query)
  }

  handleChange = (event) => {
    this.props.setQuery(event.target.value)
  }

  render() {
    return (
      <div className="search">
        <input
          placeholder="Search character by name..."
          type="text"
          value={this.props.query}
          onChange={this.handleChange}
        ></input>
      </div>
    )
  }
}

export default Search
