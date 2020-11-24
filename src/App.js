import Characters from "./components/characters"
import Search from "./components/search"
import "./App.css"
import React, { Component } from "react"
import Episodes from "./components/episodes"

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
        <h2>check out my CSS skills yo!</h2>
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
        <Episodes char_name={this.state.char_name}></Episodes>
      </div>
    )
  }
}

export default App
