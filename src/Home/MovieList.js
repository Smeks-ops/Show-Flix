import React from 'react'
import './MovieList.css'

const MovieList = (props) => {
  return (
    <div className='MovieListContainer'>
      {props.movies.map((movie, index) =>
        <div>
          <img src={movie.Poster} alt='movie'></img>
        </div>)}
    </div>
  )
}

export default MovieList
