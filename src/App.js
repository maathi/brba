import React, { Component } from "react"
import Quote from "./components/quote"
import Search from "./components/search"
import Characters from "./components/characters"

import "./App.css"

class App extends Component {
  state = {
    query: "",
    char_name: "",
  }

  setQuery = (query) => {
    console.log("App : seting query", query)
    this.setState({ query })
    console.log("App : query now is:", this.state.query)
  }

  setCharName = (char_name) => {
    this.setState({ char_name })
  }

  render() {
    return (
      <div className="container">
        <Quote></Quote>
        <Search
          query={this.state.query}
          setQuery={(query) => {
            this.setQuery(query)
          }}
        ></Search>
        <Characters
          query={this.state.query}
          setCharName={(char_name) => {
            this.setCharName(char_name)
          }}
        ></Characters>
      </div>
    )
  }
}

export default App
