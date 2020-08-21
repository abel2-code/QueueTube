import React, { useState, useEffect } from 'react';
import './Lists.css';
import CreateList from './CreateList';
import { useHistory } from "react-router";

const Lists = () => {
    let history = useHistory();
    const [myVideos, setVideos] = useState([])
    const [currentUser, setUser] = useState('');
    const [currentList, setList] = useState('')

    let sameList



    useEffect(() => {
      fetch('http://localhost:3001/currentuser', {
        credentials: 'include'
      })
      .then(res => res.json())
      .then(user => setUser(user))
      }, []);

      const goBack = () => {
        history.push('/');
      }

      const displayMovies = (id) => {
        setList(id)
        fetch(`http://localhost:3001/lists/${id}`)
        .then(res => res.json())
        .then(list => setVideos(list.videos))
      }

      const deleteList = (id) => {
        fetch(`http://localhost:3001/lists/${id}`, {
          method: 'DELETE',
          headers: {'Content-Type':'application/json'}
        })
      }

      const createList = (e) => {
        let objectConfig = {
          credentials: 'include',
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            title: e.target.title.value,
            user_id: currentUser.id
          })
        }
        fetch('http://localhost:3001/lists', objectConfig)
        .then(res => res.json())
        .then(newList=> setList(newList))
      }

      useEffect(() => {
        let sameList
        if (currentList !== sameList) {
          console.log(currentList)}
        // fetch(`http://localhost:3001/lists/${currentList.id}`, {
        //   credentials: 'include'
        // })
        // .then(res => res.json())
        // .then(list => {
        //   sameList = list
        //   setList(list)})}
      }, []);


    return (
        <div className='lists'>
            <button className='go-back' onClick={() => goBack()}>Go Back</button>
            <div><CreateList getList={e => createList(e)}/></div>
            <div className='each-list'>
              {currentUser ? 
              currentUser.lists.map(list => 
              <div key={list.id}>
                <h1 className='list-title' onClick={() => displayMovies(list.id)}>{list.title}</h1>

                <button className='delete' onClick={() => deleteList(list.id)}>Delete List</button>
                <ul>{myVideos ? myVideos.map(video => video.list_id === currentList ? console.log('yes') : console.log('no'))
                : null}
                </ul>
              </div>) 
              : null}</div>
        </div>
    );
}

export default Lists;
