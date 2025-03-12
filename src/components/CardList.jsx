import { Card } from './Card';
import images from '../data.json';

function CardList() {
  return (
    <div className="cards-list">
      {images.map((image) => (
        <Card key={image} image={image} />
      ))}
    </div>
  );
}

export { CardList };
