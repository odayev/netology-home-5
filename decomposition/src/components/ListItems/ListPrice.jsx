export default function ListPrice(props) {
  return (
    <li className="header_body_list">
      <p className="price_info">
        <span>
          {props.currency} {"\u00A0"}
        </span>
        <span>
          {props.price} {"\u00A0"}
        </span>
        <span>{props.action}</span>
      </p>
    </li>
  );
}
