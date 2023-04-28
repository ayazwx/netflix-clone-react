import React from "react"
import Navbar from "../components/Navbar"
import styled from "styled-components"

const NotFound = (props) => {
  return (
    <Container>
    <Navbar />
    <div className="not-available">
        <h1>404</h1>
        <h2>Not Found</h2>
    </div>
      
    </Container>
  )
};

const Container = styled.div`
    .not-available {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        flex-direction: column;
        text-align: center;
        color: white;
    }
`

export default NotFound;
