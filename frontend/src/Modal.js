import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import avatar from './avatar_one.png'
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
  
export default function SimpleModal() {
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

    // const handleSubmit = (e) => {
    //   e.preventDefault()
    //   let form = e.currentTarget
    //   let objectConfig = {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({
    //       name: e.target.name.value,
    //       email: e.target.email.value,
    //       password: e.target.password.value
    //     })
    //   }
    //   fetch('http://localhost:3000/users', objectConfig)
    //   .then(res => res.json())
    //   .then(user => console.log(user))
    //   form.reset()
    // }

    const handleSubmit = (e) => {
      e.preventDefault()
      let form = e.currentTarget
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
      fetch('http://localhost:3000/login', objectConfig)
      .then(res => res.json())
      .then(user => console.log(user))
      form.reset()
    }
  
    const body = (
      <div style={modalStyle} className={classes.paper}>
        <h2 id="simple-modal-title">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <input type='text' name='name' placeholder='Enter your name'></input>
          <input type='text' name='email' placeholder='Enter your email'></input>
          <input type='text' name='password' placeholder='Enter your password'></input>
          <input type='submit' value='Submit'></input>
        </form>
        <SimpleModal />
      </div>
    );
  
    return (
      <div>
        <img className="nav-avatar"
            src={avatar}
            alt="QueTube Avatar"
            onClick={handleOpen}
            />
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
  