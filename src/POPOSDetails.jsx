import { useParams } from "react-router-dom";
import data from "./sfpopos-data.json";

function POPOSDetails() {
  const { id } = useParams();
  const index = Number(id);

  if (!data[index]) return <div>Not found</div>;

  const { images, title, desc, hours, features, geo } = data[index];

  return (
    <div>
      <div>
        <img src={`/images/${images[0]}`} alt={title} />
      </div>

      <div>
        <h1>{title}</h1>
        <p>{desc}</p>
        <p>{hours}</p>
        <p>{features}</p>
        <p>{geo.lat} {geo.lon}</p>
      </div>
    </div>
  );
}

export default POPOSDetails;