import React from "react";
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'                                                                    /*Here*/

export default function Navbar(props) {                                                               /*Here*/
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode}  bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/Homepage">
            {props.title}                                                                           {/* Here */}
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"         aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/Homepage">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/TextForm">
                  {props.aboutCompany}                                                                  {/* Here */}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/About">
                  About                                                                  {/* Here */}
                </Link>
              </li>
            </ul>
            <div className={`form-check form-switch mx-3 text-${props.mode==='light'?'dark':'light'}`}>
              <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
            </div>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" 
              placeholder={props.placeholderinput}                                                      /* Here */ 
              aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Find
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired, /*If not recived a string throws an error*/
    aboutText: PropTypes.string
}

Navbar.defaultProps = {
    placeholderinput : 'Looking for Something'
}
