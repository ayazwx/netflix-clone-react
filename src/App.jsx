import React from 'react';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Signup from './pages/Signup';
import Login from './pages/Login';
import Netflix from './pages/Netflix';
import { firebaseAuth } from './utils/firebase-config';
import Player from './pages/Player';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {firebaseAuth.currentUser ? <Route path="/" element={<Login />} /> : <Route path="/" element={<Netflix />} />}
        {/* <Route exact path="/" element={firebaseAuth.currentUser ? <Netflix/> : <Login />} /> */}
        <Route exact path="/player" element={<Player />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

