import { useState, useEffect } from 'react';
import { CardList } from './components/CardList';

function App() {
  const [selected, setSelected] = useState([]);
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    if (selected.length > bestScore) {
      setBestScore(selected.length);
    }
  }, [bestScore, selected]);

  function handleClick(item) {
    const hasItem = selected.indexOf(item) >= 0;

    if (hasItem) {
      console.log('this item is already selected, do reset');
      setSelected([]);
      return;
    }

    setSelected([...selected, item]);
  }

  return (
    <div className="container">
      <h1>such memory card!</h1>
      <div>Best score: {bestScore}</div>
      <div>Current score: {selected.length} </div>
      <CardList handleClick={handleClick} />
    </div>
  );
}

export default App;
