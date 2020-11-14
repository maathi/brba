import Characters from "./components/characters";
import Search from "./components/search";

import React, { Component } from 'react'

class App extends Component {

  state = {
    query : ""
  }

  setQuery = (query) => {
    console.log("App : seting query",query)
    this.setState({query})
    console.log("App : query now is:",this.state.query)
  }

  render() {
    return (
      <div>
              <Search query={this.state.query} setQuery={(query) => {this.setQuery(query)}}></Search>
              <Characters query={this.state.query}></Characters>
      </div>
    )
  }
}

export default App
