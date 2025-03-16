import { useState, useEffect } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Loading from './components/Loading';
import Footer from './components/Footer';
import { CardList } from './components/CardList';
import fetchImages from './utils/fetchImages';
import data from './data.json';

function App() {
  const [selected, setSelected] = useState([]);
  const [bestScore, setBestScore] = useState(0);
  const [images, setImages] = useState([]);
  const [isLocalImages, setIsLocalImages] = useState(true);

  useEffect(() => {
    if (selected.length > bestScore) {
      setBestScore(selected.length);
    }
  }, [bestScore, selected]);

  useEffect(() => {
    setSelected([]); // reset current score

    if (isLocalImages) {
      const images = data.map((title) => ({
        url: `${window.location.pathname}images/${title}.png`,
        title
      }));
      setImages(images);
    } else {
      fetchImages('sunflower')
        .then((images) => {
          setImages(images ?? []);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [isLocalImages]);

  function handleCheckoxChange(ev) {
    const { checked } = ev.target;
    console.log(`set local images to ${checked}`);
    setIsLocalImages(checked);
  }

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
      <Header checked={isLocalImages} onChange={handleCheckoxChange} />

      <Main>
        <div className="stats">
          <div>Current score: {selected.length} </div>
          <div>Best score: {bestScore}</div>
        </div>
        {images.length ? (
          <CardList
            images={images}
            handleClick={handleClick}
            isLocalImages={isLocalImages}
          />
        ) : (
          <Loading>Loading images...</Loading>
        )}
      </Main>

      <Footer />
    </>
  );
}

export default App;
