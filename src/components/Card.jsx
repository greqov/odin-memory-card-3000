function Card({ image, handleClick }) {
  // const url = `${window.location.pathname}images/${image}.png`;

  return (
    <div
      className="card"
      onClick={() => {
        handleClick(image);
      }}
    >
      <figure>
        <img className="card__image" src={image} alt={image} />
        {/* <figcaption> {image} </figcaption> */}
      </figure>
    </div>
  );
}

export { Card };
