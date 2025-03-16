function Card({ image, handleClick, isLocalImages }) {
  const { url, title } = image;

  return (
    <div
      className="card"
      onClick={() => {
        handleClick(image);
      }}
    >
      <figure>
        <img
          className={`card__image ${!isLocalImages && 'card__image--cover'}`}
          src={url}
          alt={title}
        />
        {title && <figcaption> {title} </figcaption>}
      </figure>
    </div>
  );
}

export { Card };
