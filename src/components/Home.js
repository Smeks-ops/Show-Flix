import React, { useState } from 'react'
import MovieList from './MovieList'
import './Home.css'

function Home() {
  const [movies, setMovies] = useState([
    {
      "Title": "Mission: Impossible - Ghost Protocol",
      "Year": "2011",
      "imdbID": "tt1229238",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTY4MTUxMjQ5OV5BMl5BanBnXkFtZTcwNTUyMzg5Ng@@._V1_SX300.jpg"
    },
    {
      "Title": "Mission: Impossible",
      "Year": "1996",
      "imdbID": "tt0117060",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTc3NjI2MjU0Nl5BMl5BanBnXkFtZTgwNDk3ODYxMTE@._V1_SX300.jpg"
    },
    {
      "Title": "Mission: Impossible - Rogue Nation",
      "Year": "2015",
      "imdbID": "tt2381249",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BOTFmNDA3ZjMtN2Y0MC00NDYyLWFlY2UtNTQ4OTQxMmY1NmVjXkEyXkFqcGdeQXVyNTg4NDQ4NDY@._V1_SX300.jpg"
    },
    {
      "Title": "Mission: Impossible III",
      "Year": "2006",
      "imdbID": "tt0317919",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BOThhNTA1YjItYzk2Ny00M2Y1LWJlYWUtZDQyZDU0YmY5Y2M5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
    },
  ])
  return (
    <div className='home'>
      <div class="grid-container">
        <div class="item1">Header</div>
        <div class="item2">Menu</div>
        <div class="item3">
          <div class="grid-con">
            <div class="grid-item"><MovieList movies={movies} /></div>
            <div class="grid-item"><MovieList movies={movies} /></div>
            <div class="grid-item"><MovieList movies={movies} /></div>
            <div class="grid-item">4</div>
            <div class="grid-item">5</div>
            <div class="grid-item">6</div>
            <div class="grid-item">7</div>
            <div class="grid-item">8</div>
            <div class="grid-item">9</div>
          </div>
        </div>
        <div class="item5">Footer</div>
      </div>

    </div>
  )
}

export default Home
