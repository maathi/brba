function Card({ infos }) {
  let { name, img } = infos

  return (
    <li>
      {name}
      <img style={{ width: "150px", borderRadius: "4px" }} src={img}></img>
    </li>
  )
}
export default Card
