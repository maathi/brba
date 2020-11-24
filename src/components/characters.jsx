import React, { Component } from "react"
import "../styles/characters.css"

class Characters extends Component {
  state = { chars: [] }

  async componentDidMount() {
    let chars = await this.getData()
    this.setState({ chars })
  }

  async componentDidUpdate(prevProps, prevState) {
    if (this.props.query === prevProps.query) return

    let chars = await this.getData(this.props.query)
    this.setState({ chars })
  }

  async getData(query = "") {
    let url = "https://www.breakingbadapi.com/api/characters?name=" + query
    let res = await fetch(url)
    return res.json()
  }

  handleClick(char_name) {
    this.props.setCharName(char_name)
  }

  render() {
    return (
      <div className="chars">
        {this.state.chars.map((c) => (
          <div key={c.char_id} className="char">
            <div className="wrapper">
              <img src={c.img} alt=""></img>
            </div>
            <b>{c.name}</b>
          </div>
        ))}
      </div>
    )
  }
}
export default Characters
