import React from 'react';
import styled from 'styled-components';
import logo from "../assets/logo.png";
import FaSearch from "react-icons/fa";

export default function Navbar({ isScrolled }) {
    const links=[
        {name:"Home", link:"/"},
        {name:"Movies", link:"/movies"},
        {name:"TV Shows", link:"/tv"},
        {name:"My List", link:"/mylist"},
    ]
    const [showSearch, setShowSearch] = useState(false);
    const [inputHover, setInputHover] = useState(false);
    return  (
        <Container>
            <nav className={`flex ${isScrolled ? "scroled" : ""}`}>
                <div className="left flex a-center">
                    <div className="brand flex a-center j-center">
                        <ims src={logo} alt="logo" />
                    </div>
                    <ul className="links flex">
                        {
                            links.map((name, link)=> {
                                return (
                                    <li key={name}><link to={link}>{name}</link></li>
                                )
                            })
                        }
                    </ul>
                    <div className="rigt flex a-center">
                        <div className={`search ${showSearch ? "show-search" : ""}`}>
                            <button onFocus={()=> setShowSearch(true)} onBlur={
                                ()=>{
                                    if(!inputHover) setShowSearch(false);
                                }
                            }>
                                <FaSearch />
                            </button>
                            <input type="text" placeholder="Search"
                            onMouseEnter={()=>setInputHover(true)}
                            onMouseLeave={()=>setInputHover(false)}
                            onBlur={()=>{
                                setShowSearch(false)
                                setInputHover(false)
                            }}/>
                        </div>
                        <button onClick={()=> signOut(firebaseAuth)}>
                            <FaPowerOff/>
                        </button>
                    </div>
                </div>
            </nav>
        </Container>
    )
}
const Container = styled.div``;
