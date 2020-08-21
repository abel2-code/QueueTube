import React, { useState, useEffect } from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav';
import { useHistory } from "react-router";




function App()  {
  let history = useHistory();
  const [currentUser, setUser] = useState('');
  useEffect(() => {
    fetch('http://localhost:3001/currentuser', {
      credentials: 'include'
    })
    .then(res => res.json())
    .then(user => setUser(user))
  }, []);


  return (
    <div className="app">
      <Nav />
      <Banner/>
      <Row title="ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchTrending} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>

  );
}

export default App;
