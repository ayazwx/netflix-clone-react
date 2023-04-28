import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import video from "../assets/React.mp4"
import {IoPlayCircleSharp} from 'react-icons/io5'
import {AiOutlinePlus} from 'react-icons/ai'
import {RiThumbUpFill, RiThumbDownFill} from 'react-icons/ri'
import {BsCheck} from 'react-icons/bs'
import {BiChevronDown} from 'react-icons/bi'

export default React.memo(
function Card({movieData, isLiked=false}) {
  const [isHovered, setisHovered] = useState(false)
  const navigate = useNavigate()
  return (
    <Container onMouseEnter={() => setisHovered(true)} onMouseLeave={() => setisHovered(false)}>
      <img src={`https://image.tmdb.org/t/p/w500${movieData.image}`} alt="movie" className="movie-img"/>
      {
        isHovered && (
          <div className="hover">
            <div className="image-video-container">
              <img src={`https://image.tmdb.org/t/p/w500${movieData.image}`} alt="movie" onClick={() => navigate("/player")}/>
              <video src={video} autoPlay={true} loop={true} muted={true} onClick={() => navigate("/player")}/>
            </div>
            <div className="info-container flex column">
              <h3 className="name" onClick={() => navigate("/player")}>
                {movieData.name}
              </h3>
              <div className="icons flex j-between">
                <div className="controls flex">
                  <IoPlayCircleSharp title="play" onClick={() => navigate("/player")}/>
                  <RiThumbUpFill title="like"/>
                  <RiThumbDownFill title="dislike"/>
                  {
                    isLiked ? <BsCheck title="Remove from list"/> : <AiOutlinePlus title="Add to my list"/>
                  }
                  <div className="info">
                    <BiChevronDown title="More info" />
                  </div>
                </div>
                <div className="genres flex">
                  <ul className="flex">
                    {
                      movieData.genres.map((genre) => {
                        <li key={genre.id}>{genre.name}</li>
                      }
                    )
                    }
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )
      }
    </Container>
  )
})

const Container = styled.div`
  max-width: 230px;
  width: 100%;
  height: 100%;
  position: relative;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    border-radius: 0.2rem;
    z-index: 10;
  }
  .movie-img {
    z-index: 1;
  }
  .hover {
    z-index: 99;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 20rem;
    transform: translate(-50%, -50%);
    height: max-content;
    border-radius: 0.3rem;
    box-shadow: rgba(0, 0, 0, 0.75) 0px 3px 10px;
    background-color: #181818;
    transition: 0ms.3s ease-in-out;
    .image-video-container {
      position: relative;
      height: 140px;
      z-index: 10;
      img {
        width: 100%;
        height: 100%;
        border-radius: 0.3rem;
        top: 0;
        object-fit: cover;
        position: absolute;
        z-index: 4;
      }
      video {
        width: 100%;
        height: 100%;
        border-radius: 0.3rem;
        position: absolute;
        top: 0;
        object-fit: cover;
        z-index: 6;
      }
    }
    .info-container {
      padding: 1rem;
      gap: 0.5rem;
      z-index: 10;
    }
    .icons {
      .controls {
        gap: 1rem;
        display: flex;
      }
      svg {
        font-size: 2rem;
        cursor: pointer;
        transition: 0.3s ease-in-out;
        &:hover {
          color: #b8b8b8;
        }
      }
    }
  }
  .genres {
    ul {
      gap: 1rem;
      li {
        padding-right: 0.7rem;
        &:first-of-type {
          list-style-type: none;
        }
      }
    }
  }
`
