import React from 'react'
import {Link} from "react-router-dom"
const Home = () => {
  return (
    <>
    <div>
      <Link>
        <div>
          <nav className="navbar">
            <div className="navbar-logo">
              <Link to="/">Lol Company</Link>
            </div>
            <ul className="navbar-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </Link>
    </div>
    </>
  )
}

export default Home