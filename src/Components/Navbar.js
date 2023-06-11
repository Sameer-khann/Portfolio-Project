import React from 'react'
import {Link} from "react-router-dom"

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light navbar navbar-dark bg-dark">
                <Link to="/" className="navbar-brand text-info">The Superior Interior </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav ">
                        <li className="nav-item active"><Link to="/" className="nav-link">Home</Link></li>
                        <li className="nav-item active"><Link to="/about" className="nav-link">About</Link></li>
                        <li className="nav-item active"><Link to="/contact" className="nav-link">Contact</Link></li>
                    </ul>
                    {/* <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form> */}
                </div>
            </nav>
    </div>
  )
}

export default Navbar
