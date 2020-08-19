import React, { useState, useEffect } from 'react'
import './Nav.css'

function Nav() {
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
            <img className="nav-logo"
            src="#!"
            alt="QueueTube Logo" 
            />
            <img className="nav-avatar"
            src="#!"
            alt="QueTube Avatar"
            />
        </div>
    )
}

export default Nav
