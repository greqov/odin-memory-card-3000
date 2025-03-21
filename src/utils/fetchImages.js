function fetchImages(query) {
  const API_KEY = '26747005-ea3cdfdf9077b58ee5c6f685c';
  const url = `https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo&pretty=true&per_page=12`;

  return fetch(url)
    .then((response) => response.json())
    .then((response) =>
      response.hits.map((item) => ({ url: item.previewURL, title: '' }))
    )
    .catch((err) => {
      console.log(err);
    });
}

export default fetchImages;
