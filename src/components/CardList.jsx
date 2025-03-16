import { Card } from './Card';
import { shuffle } from '../utils/shuffle';

function CardList({ images, handleClick, isLocalImages }) {
  return (
    <div className="cards-list">
      {shuffle(images).map((image) => (
        <Card
          key={image.url}
          image={image}
          handleClick={handleClick}
          isLocalImages={isLocalImages}
        />
      ))}
    </div>
  );
}

export { CardList };
