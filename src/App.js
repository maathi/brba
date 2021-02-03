import { useState } from "react"
import Quote from "./components/quote"
import Search from "./components/search"
import Characters from "./components/characters"

import "./App.css"

function App() {
  let [query, setQuery] = useState("")

  return (
    <div className="container">
      <Quote></Quote>
      <Search query={query} setQuery={setQuery}></Search>
      <Characters query={query}></Characters>
    </div>
  )
}

export default App
