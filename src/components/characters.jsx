import { useState, useEffect } from "react"
import "../styles/characters.css"

function Characters(props) {
  let [chars, setChars] = useState([])
  let baseUrl = "https://www.breakingbadapi.com/api/characters?name="
  useEffect(async () => {
    let chars = await getData()
    setChars(chars)
  }, [])

  useEffect(async () => {
    let chars = await getData(props.query)
    setChars(chars)
  }, [props.query])

  async function getData(query = "") {
    let url = baseUrl + query
    let res = await fetch(url)
    return res.json()
  }

  return (
    <div className="chars">
      {chars.map((c) => (
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
export default Characters
