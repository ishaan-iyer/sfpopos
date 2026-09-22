import { useParams } from "react-router-dom";
import data from "./sfpopos-data.json";
import './POPOSDetails.css';

function POPOSDetails() {
  const { id } = useParams();
  const index = Number(id);

  if (!data[index]) return <div>Not found</div>;

  const { images, title, desc, hours, features, geo, address, website } = data[index];

  return (
    <article className="POPOSDetails">
      <header className="POPOSDetails-header">
        <h1>{title}</h1>
      </header>

      <figure className="POPOSDetails-image">
        <img src={`/images/${images[0]}`} alt={`${title} at ${address}. ${desc.split('.')[0]}.`} />
        <figcaption>{address}</figcaption>
      </figure>

      <section className="POPOSDetails-info">
        <h2>About this space</h2>
        <p>{desc}</p>
        <p>{hours}</p>
        <p>{features}</p>
        <p>{geo.lat} {geo.lon}</p>
      </section>

      <footer className="POPOSDetails-footer">
        {website && <a href={website} target="_blank" rel="noreferrer">Official website</a>}
      </footer>
    </article>
  );
}

export default POPOSDetails;