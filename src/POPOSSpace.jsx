import { Link } from "react-router-dom";

function POPOSSpace(props) {
  const { name, description, image, address, hours, id } = props;

  const imageAlt = `${name} at ${address}. ${description.split('.')[0]}.`;

  return (
    <article className="POPOSSpace">
      <h2>
        <Link to={`/details/${id}`}>{name}</Link>
      </h2>

      <figure>
        <Link to={`/details/${id}`} aria-label={`View details for ${name}`}>
          <img src={`/images/${image}`} alt={imageAlt} />
        </Link>
        <figcaption>{address}</figcaption>
      </figure>

      <p>{hours || 'Hours not listed'}</p>
    </article>
  );
}

export default POPOSSpace;