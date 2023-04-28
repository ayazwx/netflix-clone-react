import React, { useEffect } from "react"
import styled from "styled-components"
import Navbar from "../components/Navbar"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import Slider from "../components/Slider"
import SelectGenre from "../components/SelectGenre"
import { fetchMovies, getGenres } from "../store"

const TVShows = (props) => {
    const movies = useSelector((state) => state.netflix.movies)
    const genres = useSelector((state) => state.netflix.genres)
    const genresLoaded = useSelector((state) => state.netflix.genresLoaded)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getGenres())
    }, [])

    useEffect(() => {
        if (genresLoaded) dispatch(fetchMovies({ type: "tv" }))
    }, [genresLoaded])
    

  return (
    <Container>
      <Navbar />
      <div className="data">
        <SelectGenre genres={genres} type="tv"/>
        {movies ? <Slider movies={movies}/> : <h1>Loading...</h1>  }
      </div>
    </Container>
  )
}
const Container = styled.div`
  .data {
    margin-top: 8rem;
    .not-available {
      text-align: center;
      color: white;
      margin-top: 4rem;
    }
  }
`

export default TVShows;
