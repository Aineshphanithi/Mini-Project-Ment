import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import MentTransparent from '../Images/MentTransparent.png';
import './Header.css';
import Volunteers from '../volunteer/Volunteers';

export default class Header extends Component {
   render() {
      return (
        <nav className ="navbar navbar-expand-sm navbar-dark navbar-custom">
        <div className = "container">
          <Link className="navbar-brand" to="/">
          
          <img src={MentTransparent} width = "100" height = "500" className="img-fluid" />
          
            </Link>
          <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/videos" className="nav-link">Videos</Link>
              </li>
              <li className="nav-item">
                <Link to="/volunteers" className="nav-link">Volunteers</Link>
              </li>
              <li className="nav-item">
                <Link to="/blogs" className="nav-link">Blogs</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      )
   }
}