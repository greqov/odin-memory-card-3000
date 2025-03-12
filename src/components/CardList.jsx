import { Card } from './Card';
import images from '../data.json';
import { shuffle } from '../utils/shuffle';

function CardList({ handleClick }) {
  return (
    <div className="cards-list">
      {shuffle(images).map((image) => (
        <Card key={image} image={image} handleClick={handleClick} />
      ))}
    </div>
  );
}

export { CardList };
