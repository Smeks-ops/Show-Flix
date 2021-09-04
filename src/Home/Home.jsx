import React, { useState, useEffect } from 'react'
import MovieList from './MovieList'
import Movies from "../components/Movies/Movies"
import SideBar from '../components/SideBar'
import axios from "axios"


function Home() {
  const [movies, setMovies] = useState([])
  const [searchValue, setSearchValue] = useState('')

  const getMovieRequest = async () => {
    const URL = `http://www.omdbapi.com/?s=captain&apikey=17716a1d`


    const response = await fetch(URL)
    const responseJson = await response.json()

    if (responseJson.Search) {
      setMovies(responseJson.Search)
    }


  }
  useEffect(() => {
    getMovieRequest(searchValue)

  }, [searchValue])

 
  return (
    <>
      <div className="main-page">
        <div className="sidebar">
          <SideBar />
        </div>
        <div className="search-section">
          <Movies searchValue={searchValue} setSearchValue={setSearchValue} />
          <MovieList movies={movies} />
          <MovieList movies={movies}  />
          
        </div>
      </div>
      
    </>
  )
}

export default Home
