import React, { useRef, useState, useEffect } from "react"
import Card from "./Card";
import styled from "styled-components"
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

export default React.memo(
function CardSlider({data, title}) {
  const listRef = useRef()
  const [sliderPosition, setSliderPosition] = useState(0)
  const [showControls, setShowControls] = useState(false)
  const [screenWidth, setscreenWidth] = useState(window.innerWidth)
  useEffect(() => {
    window.addEventListener("resize", () => {
      setscreenWidth(window.innerWidth)
    })
  }, [])
  const handleDirection = (direction) => {
    // console.log(listRef.current.computedStyleMap().get('transform')[0].x.value + " " + sliderPosition)
    let distance = listRef.current.computedStyleMap().get('transform')[0].x.value
    if(direction === "left" && sliderPosition > 0) {
      listRef.current.style.transform = `translateX(${240 + distance}px)`
      setSliderPosition(sliderPosition - 1)
    } if(direction === "right" && sliderPosition < screenWidth/230 + 1) {
      listRef.current.style.transform = `translateX(${-240 + distance}px)`
      setSliderPosition(sliderPosition + 1)
    }
  }
  return (
    <Container
    className="flex column"
    showControls={showControls}
    onMouseEnter={() => setShowControls(true)}
    onMouseLeave={() => setShowControls(false)}>
    <h1>{title}</h1>
    <div className="wrapper">
      <div className={`slider-action left flex j-center a-center ${!showControls && "none"}`}>
        <AiOutlineLeft onClick={() => handleDirection("left")}/>
      </div>
    <div className="slider flex" ref={listRef}>
      {
        data.map((movie, index) => {
          return <Card movieData={movie} index={index} key={movie.id}/>
        })
      }
    </div>
    <div className={`slider-action right flex j-center a-center ${!showControls && "none"}`}>
      <AiOutlineRight onClick={() => handleDirection("right")}/>
    </div>
    </div>
    </Container>
  )
});

const Container = styled.div`
  gap: 1rem;
  position: relative;
  padding: 2rem 0;
  h1 {
    margin-left: 50px;
  }
  .wrapper {
    .slider {
      width: max-content;
      gap: 1rem;
      transform: translateX(0px);
      transition:0.3s ease-in-out;
      margin-left: 50px;
    }
    .slider-action {
      position: absolute;
      z-index: 99;
      height: 100%;
      width: 50px;
      top: 0;
      bottom: 0;
      transition: 0ms.3s ease-in-out;
      cursor: pointer;
      svg {
        font-size: 2rem;
      }
    }
    .none {
      opacity: 0;
    }
    .left {
      left: 0;
    }
    .right {
      right: 0;
    }
  }
`;
