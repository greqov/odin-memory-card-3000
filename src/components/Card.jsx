function Card({ image }) {
  return (
    <div className="card">
      <figure>
        <img
          className="card__image"
          src={`/src/images/${image}.png`}
          alt={image}
        />
        <figcaption> {image} </figcaption>
      </figure>
    </div>
  );
}

export { Card };
