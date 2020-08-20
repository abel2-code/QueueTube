import React, { useState, useEffect } from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav';



function App()  {
  const [lists, setLists] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/lists', {
      credentials: 'include'
    })
    .then(res => res.json())
    .then(lists => setLists(lists))
  }, []);
  useEffect(() => {
    fetch('http://localhost:3000/currentuser', {
      credentials: 'include'
    })
    .then(res => res.json())
    .then(user => console.log(user))
  }, []);




  return (
    <div className="app">
      <Nav />
      <Banner lists={lists}/>
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
