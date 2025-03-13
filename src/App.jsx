import { useState, useEffect } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
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
    <>
      <Header />

      <Main>
        <div className="stats">
          <div>Current score: {selected.length} </div>
          <div>Best score: {bestScore}</div>
        </div>
        <CardList handleClick={handleClick} />
      </Main>

      <Footer />
    </>
  );
}

export default App;
