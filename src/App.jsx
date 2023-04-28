import React from 'react';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Signup from './pages/Signup';
import Login from './pages/Login';
import Netflix from './pages/Netflix';
import { firebaseAuth } from './utils/firebase-config';
import Player from './pages/Player';
import Movies from './pages/Movies'
import NotFound from './pages/404'
import TVShows from './pages/TVShows'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {firebaseAuth.currentUser ? <Route path="/" element={<Login />} /> : <Route path="/" element={<Netflix />} />}
        {/* <Route exact path="/" element={firebaseAuth.currentUser ? <Netflix/> : <Login />} /> */}
        <Route exact path="/player" element={<Player />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/movies" element={<Movies />} />
        <Route exact path="/tv" element={<TVShows />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

