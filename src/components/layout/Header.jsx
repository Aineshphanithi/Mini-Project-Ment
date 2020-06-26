import React, { Component } from 'react'
import { Link,navigate } from '@reach/router';
import MentTransparent from '../Images/MentTransparent.png';
import './Header.css';
import Volunteers from '../volunteer/Volunteers';
import {auth} from '../../firebase'
export default function Header(props){
      const onSignOut=()=>{
        console.log('signing out',props)
        auth.signOut().then(function(){

            console.log('user signed out')
            alert('signed out')
            
            navigate("/")
            // Sign-out successful.
        }).catch(function(error) {
            // An error happened.
          });
      }
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
              {!props.user ?
              <li className="nav-item">
                <Link to="/sign_in" className="nav-link">Videos</Link>
              </li>
              :
              <li className="nav-item">
                <Link to="/videos" className="nav-link">Videos</Link>
              </li>
              }
              {!props.user ?
                <li className="nav-item">
                  <Link to="/sign_in" className="nav-link">Volunteers</Link>
                </li>
                :  
                <li className="nav-item">
                  <Link to="/volunteers" className="nav-link">Volunteers</Link>
                </li>
              } 
              <li className="nav-item">
                <Link to="/postapp" className="nav-link">Blogs</Link>
              </li>
              {!props.user 
                        ?
                        <Link  to="/sign_in" className="nav-item">Sign In</Link>
                        :
                        <a className="nav-item" onClick ={onSignOut} >Sign Out</a>
                        
              }

            </ul>
          </div>
        </div>
      </nav>
      )
   
}