import { useState, useEffect } from "react"
import "../styles/quote.css"

function Quote() {
  let [text, setText] = useState("")
  let [author, setAuthor] = useState("")

  useEffect(async () => {
    let quote = await getData()

    setText(quote[0].quote)
    setAuthor(quote[0].author)
  }, [])

  async function getData() {
    let url = "https://www.breakingbadapi.com/api/quote/random"
    let res = await fetch(url)
    return res.json()
  }

  return (
    <div className="quote">
      <p id="text">{text}</p>
      <p id="author">{author}</p>
    </div>
  )
}

export default Quote
