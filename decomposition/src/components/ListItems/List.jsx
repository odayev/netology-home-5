export default function List(props) {
  return (
      <li className="header_list">
        <img src={props.icon} alt="" />
        <p>{props.text}</p>
      </li>
  )
}
