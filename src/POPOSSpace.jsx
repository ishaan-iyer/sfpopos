import { Link } from "react-router-dom";

function POPOSSpace(props) {
  const { name, image, address, hours, id } = props;

  return (
    <div className="POPOSSpace">
      <h1>
        <Link to={`/details/${id}`}>{name}</Link>
      </h1>

      <Link to={`/details/${id}`}>
        <img src={`/images/${image}`} width="300" height="300" alt={name} />
      </Link>

      <div>{address}</div>
      <div>{hours}</div>
    </div>
  );
}

export default POPOSSpace;