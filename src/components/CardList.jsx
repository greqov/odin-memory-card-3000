import { Card } from './Card';
import images from '../data.json';

function CardList({ handleClick }) {
  return (
    <div className="cards-list">
      {images.map((image) => (
        <Card key={image} image={image} handleClick={handleClick} />
      ))}
    </div>
  );
}

export { CardList };
