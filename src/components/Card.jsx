function Card({ image, handleClick }) {
  return (
    <div
      className="card"
      onClick={() => {
        handleClick(image);
      }}
    >
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
