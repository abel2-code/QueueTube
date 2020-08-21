import React, { useState, useEffect } from 'react'
import Modal from './Modal'
import q from './queuetube_logo.png';
import avatar from './avatar_one.png'
import './Nav.css'

export default function Nav({ user, logout, login, getSignIn }) {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 150) {
                handleShow(true);
            } else handleShow(false);
        })
    })

    const handleClick = () => (
        fetch('http://localhost:3001/logout', {
            credentials: 'include',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(() => logout())
    )

    return (
        <div className={`nav ${show && "nav-black"}`}>
            <img 
            onClick={() => console.log(user)}
            src={q} 
            className="nav-logo" 
            alt="logo"
            />
            {user ? 
            <img className="nav-avatar"
            src={avatar}
            alt="QueTube Avatar"
            onClick={handleClick}
            />
            :
            <Modal currentUser={user} login={login} getSignIn={getSignIn}/>}
        </div>
    )
}



