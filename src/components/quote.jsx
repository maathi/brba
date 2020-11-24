import React, { Component } from "react"
import "../styles/quote.css"

class Quote extends Component {
  state = {
    text: "",
    author: "",
  }
  async componentDidMount() {
    let quote = await this.getData()
    console.log(quote)
    this.setState({ text: quote[0].quote, author: quote[0].author })
  }

  async getData() {
    let url = "https://www.breakingbadapi.com/api/quote/random"
    let res = await fetch(url)
    return res.json()
  }

  render() {
    return (
      <div className="quote">
        <p id="text">{this.state.text}</p>
        <p id="author">{this.state.author}</p>
      </div>
    )
  }
}

export default Quote
