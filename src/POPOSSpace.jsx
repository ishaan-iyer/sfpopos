import { Link } from "react-router-dom";

function POPOSSpace(props) {
  const { name, description, image, address, hours, id } = props;

  const imageAlt = `${name} at ${address}. ${description.split('.')[0]}.`;

  return (
    <article className="w-full text-center">
      <h2 className="text-2xl font-bold leading-tight">
        <Link to={`/details/${id}`}>{name}</Link>
      </h2>

      <figure className="m-0">
        <Link to={`/details/${id}`} aria-label={`View details for ${name}`}>
          <img className="h-auto w-full" src={`/images/${image}`} alt={imageAlt} />
        </Link>
        <figcaption className="mt-2">{address}</figcaption>
      </figure>

      <p className="mt-2">{hours || 'Hours not listed'}</p>
    </article>
  );
}

export default POPOSSpace;