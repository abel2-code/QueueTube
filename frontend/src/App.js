import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav';
<<<<<<< HEAD
import { useHistory } from "react-router";


=======
>>>>>>> ab61789634ccef99976b88b8e5f53b555f083133

let sameUser

function App()  {
<<<<<<< HEAD
  let history = useHistory();
  const [currentUser, setUser] = useState('');
  useEffect(() => {
    fetch('http://localhost:3001/currentuser', {
=======
  const [lists, setLists] = useState([]);
  const [currentUser, setCurrentUser] = useState('')

  useEffect(() => {
    fetch('http://localhost:3001/lists', {
>>>>>>> ab61789634ccef99976b88b8e5f53b555f083133
      credentials: 'include'
    })
    .then(res => res.json())
    .then(user => setUser(user))
  }, []);

<<<<<<< HEAD

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
=======
  useEffect(() => {
    let sameUser
    if (currentUser !== sameUser) {
    fetch('http://localhost:3001/currentuser', {
      credentials: 'include'
    })
    .then(res => res.json())
    .then(user => {
      sameUser = user
      setCurrentUser(user)})}
  }, []);

  const signIn = (e) => {
    // e.preventDefault()
    // let form = e.currentTarget
    let objectConfig = {
      credentials: 'include',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: e.target.name.value,
        email: e.target.email.value,
        password: e.target.password.value
      })
    }
    fetch('http://localhost:3001/login', objectConfig)
    .then(res => res.json())
    .then(user => {
      setCurrentUser(user)
    })
  }
  
  return (
    <div className="app">
      <Nav user={currentUser} getSignIn={e => signIn(e)} login={user => setCurrentUser(user)} logout={() => setCurrentUser(null)} />
      <Banner user={currentUser} lists={lists}/>
      <Row user={currentUser} title="ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
      <Row user={currentUser} title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row user={currentUser} title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row user={currentUser} title="Action Movies" fetchUrl={requests.fetchTrending} />
      <Row user={currentUser} title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row user={currentUser} title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row user={currentUser} title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row user={currentUser} title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
>>>>>>> ab61789634ccef99976b88b8e5f53b555f083133
    </div>

  );
}

export default App;
