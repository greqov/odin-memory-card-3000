function Card({ image }) {
  const { src, title } = image;

  return (
    <div className="card">
      <figure>
        <img className="card__image" src={src} alt={title} />
        <figcaption> {title} </figcaption>
      </figure>
    </div>
  );
}

export { Card };
