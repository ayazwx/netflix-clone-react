import React, {useEffect, useState} from 'react'
import Navbar from '../components/Navbar'
import BackgroundImage from '../assets/home.jpg'
import MovieLogo from '../assets/homeTitle.webp'
import {FaPlay } from 'react-icons/fa'
import {AiOutlineInfoCircle} from 'react-icons/ai'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getGenres, fetchMovies } from '../store'
import Slider from '../components/Slider'

export default function Netflix() {
    const genresLoaded = useSelector(state => state.netflix.genresLoaded)
    // const genres = useSelector((state) => state.netflix.genres)
    const movies = useSelector(state => state.netflix.movies)

    const navigate = useNavigate();
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getGenres())
    }, [])

    useEffect(() => {
        if(genresLoaded){
            console.log('genres loaded')
            dispatch(fetchMovies({type: "all"}))
        }
    }, [genresLoaded])
  return (
    <Container>
        <Navbar />
        <div className="hero">
            <img src={BackgroundImage} alt="background" className='background-image'/>
            <div className="container">
              <div className="logo">
                <img src={MovieLogo} alt="logo" />
              </div>
              <div className="buttons flex">
                <button className="flex a-center j-center" onClick={() => navigate("/player")}>
                  <FaPlay />
                  <span>Play</span>
                </button>
                <button className="flex a-center j-center">
                  <AiOutlineInfoCircle />
                  <span>More Info</span>
                </button>
                </div>
            </div>
        </div>
        <Slider movies={movies}/>
    </Container>
  )
}

const Container = styled.div`
background-color: #000;
.hero{
  position: relative;
  .background-image{
    filter: brightness(60%);
  }
  img{
    width: 100vw;
    height: 100vh;
  }
  .container{
    position: absolute;
    bottom: 5rem;
    .logo {
      img {
        width: 100%;
        height: 100%;
        margin-left: 5rem;
      }
    }
    .buttons {
      gap: 2rem;
      margin: 5rem;
      button {
        font-size: 1.4rem;
        gap: 1rem;
        border-radius: 0.2rem;
        padding: 0.5rem;
        padding-left: 2rem;
        padding-right: 2rem;
        border: none;
        cursor: pointer;
        transition: all 0.3s ease;
        &:hover {
          opacity: 0.8;
      }
      &:nth-of-type(2) {
        background: rgba(109, 109, 110, 0.7);
        color: #fff;
        svg {
          font-size: 1.5rem;
        }}
      }
    }
  }
}
`