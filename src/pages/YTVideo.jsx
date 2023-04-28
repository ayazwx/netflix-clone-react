import React from "react"
import styled from "styled-components"

const YTVideo = () => {
  return (
    <Container>
        <div className="embed-youtube">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/HyWYpM_S-2c?autoplay=1&mute=1&loop=1" />
    </div>
    </Container>
  )
};
const Container = styled.div`
    .embed-youtube {
    position: relative;
    padding-bottom: 56.25%; /* - 16:9 aspect ratio (most common) */
    /* padding-bottom: 62.5%; - 16:10 aspect ratio */
    /* padding-bottom: 75%; - 4:3 aspect ratio */
    padding-top: 30px;
    height: 0;
    overflow: hidden;
    }
.embed-youtube iframe,
.embed-youtube object,
.embed-youtube embed {
    border: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
`

export default YTVideo;
