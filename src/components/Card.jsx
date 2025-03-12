import crocodile from '../images/crocodile.png';

function Card() {
  return (
    <div className="card">
      <figure>
        <img className="card__image" src={crocodile} alt="" />
        <figcaption>An elephant at sunset</figcaption>
      </figure>
    </div>
  );
}

export { Card };
