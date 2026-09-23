import { useParams } from "react-router-dom";
import data from "./sfpopos-data.json";

function POPOSDetails() {
  const { id } = useParams();
  const index = Number(id);

  if (!data[index]) return <div>Not found</div>;

  const { images, title, desc, hours, features, geo, address, website } = data[index];

  return (
    <article className="mx-auto grid w-[calc(100%-2rem)] max-w-[1100px] grid-cols-1 gap-6 [grid-template-areas:'header'_'info'_'image'_'footer'] md:grid-cols-2 md:[grid-template-areas:'header_header'_'image_info'_'footer_footer']">
      <header className="[grid-area:header]">
        <h1 className="text-4xl font-bold leading-tight">{title}</h1>
      </header>

      <figure className="m-0 [grid-area:image]">
        <img className="h-auto w-full" src={`/images/${images[0]}`} alt={`${title} at ${address}. ${desc.split('.')[0]}.`} />
        <figcaption className="mt-2">{address}</figcaption>
      </figure>

      <section className="[grid-area:info]">
        <h2 className="text-2xl font-bold">About this space</h2>
        <p>{desc}</p>
        <p>{hours}</p>
        <p>{features}</p>
        <p>{geo.lat} {geo.lon}</p>
      </section>

      <footer className="[grid-area:footer] border-t border-[#262626] py-4">
        {website && <a href={website} target="_blank" rel="noreferrer">Official website</a>}
      </footer>
    </article>
  );
}

export default POPOSDetails;