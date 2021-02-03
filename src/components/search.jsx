import "../styles/search.css"

function Search(props) {
  let handleChange = (event) => {
    props.setQuery(event.target.value)
  }

  return (
    <div className="search">
      <input
        placeholder="Say my name..."
        type="text"
        value={props.query}
        onChange={handleChange}
      ></input>
    </div>
  )
}
export default Search
