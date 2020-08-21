import React, { useState, useEffect } from 'react'
import Modal from './Modal'
import q from './queuetube_logo.png';
import avatar from './avatar_one.png'
import './Nav.css'

export default function Nav() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 150) {
                handleShow(true);
            } else handleShow(false);
        })
    })

    return (
        <div className={`nav ${show && "nav-black"}`}>
            <img 
            src={q} 
            className="nav-logo" 
            alt="logo"
            />
            <Modal/>
        </div>
    )
}



