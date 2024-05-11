export default function ListTitle(props) {
    return (
      <li>
        <a
          href={props.link}
          style={{ color: `${props.color}`, fontSize: `${props.font}` }}
        >
          {props.title}
        </a>
      </li>
    );
  }