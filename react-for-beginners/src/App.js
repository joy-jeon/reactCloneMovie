import { useState, useEffect } from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year"
      )).json();

    setLoading(false)
    setMovies(json.data.movies)
  }
  useEffect(() => {
    getMovies()
  }, [])

  console.log(movies)

  // useEffect(() => {
  //   fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year")
  //     .then((response) => response.json())
  //     .then((movie) => {
  //       setLoading(false)
  //       setMovies(movie.data.movies)
  //     })
  // }, [])

  return (
    <div>
      {loading ? <h3>로딩중 입니다.</h3> : null}
    </div>
  )
}

export default App;