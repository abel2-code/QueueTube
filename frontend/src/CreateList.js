import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './CreateList.css'
import Modal from '@material-ui/core/Modal';

function rand() {
    return Math.round(Math.random() * 20) - 10;
  }
  
  function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.error.dark,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));
  
export default function SimpleModal({getList}) {
    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const [currentUser, setUser] = useState('');

    useEffect(() => {
      fetch('http://localhost:3001/currentuser', {
        credentials: 'include'
      })
      .then(res => res.json())
      .then(user => setUser(user))
      }, []);

    const handleSubmit = (e) => {
      e.preventDefault()
      let form = e.currentTarget
      getList(e)
      // let objectConfig = {
      //   credentials: 'include',
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json'
      //   },
      //   body: JSON.stringify({
      //     title: e.target.title.value,
      //     user_id: currentUser.id
      //   })
      // }
      // fetch('http://localhost:3001/lists', objectConfig)
      // .then(res => res.json())
      // .then(newList=> console.log(newList))
      form.reset()
    }
  
    const body = (
      <div style={modalStyle} className={classes.paper}>
        <h2 id="simple-modal-title">Create List</h2>
        <form onSubmit={handleSubmit}>
          <input type='text' name='title' placeholder='List name'></input>
          <input type='submit' value='Submit'></input>
        </form>
        <SimpleModal />
      </div>
    );
  
    return (
      <div>
        <button className='create-list' onClick={handleOpen}>Create List</button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          {body}
        </Modal>
      </div>
    );
  }