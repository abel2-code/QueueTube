import React, { useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav';
import LoginForm from './LoginForm';


function App()  {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleClick = () => {
    setLoggedIn(!loggedIn)
  }

  return (
    <div>
      {loggedIn ?
      <div className="app">
        <Nav onClick={handleClick} />
        <Banner />
        <Row title="ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
        <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
        <Row title="Action Movies" fetchUrl={requests.fetchTrending} />
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
        <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
        <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      </div>
      :
      <div onClick={handleClick}>You are not logged in.</div> 
        }
    </div>

  );
}

export default App;
