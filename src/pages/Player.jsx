import React from "react"
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Video from "../assets/React.mp4";
import { BsArrowLeft } from "react-icons/bs";

const Player = (props) => {
    const navigate = useNavigate();
  return (
    <Container>
      <div className="player">
        <div className="back">
            <BsArrowLeft onClick={() => navigate(-1)} />
        </div>
        <video src={Video} autoPlay loop controls muted></video>
      </div>
    </Container>
  )
};

const Container = styled.div`
    .player {
        position: relative;
        width: 100vw;
        height: 100vh;
        .back {
            position: absolute;
            top: 2rem;
            left: 2rem;
            z-index: 1;
            svg {
                color: #fff;
                font-size: 2rem;
                cursor: pointer;
            }
        }
        video {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
`

export default Player;
