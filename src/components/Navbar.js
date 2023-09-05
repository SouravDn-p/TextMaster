import React from 'react'
import { Link } from 'react-router-dom/dist'

function Navbar(props) {
    
  return (
    <>
        <nav className= {`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} >
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Home</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                    <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >
                        <li className="nav-item">
                        <Link className="nav-link " aria-current="page" to="/TextForm">TextFrom</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/About">About Us</Link>
                        </li>
                        
                        
                    </ul>
                    <div className="form-check form-switch">
                        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" style={{color:props.mode === 'light' ?'black':'white'}} htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
                    </div>
                </div>
            </div>
        </nav>

    </>
  )
}

export default Navbar