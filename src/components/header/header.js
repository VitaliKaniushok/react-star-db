import React from 'react';
import './header.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  return (
    
    	<nav className="navbar navbar-expand-lg navbar-light pb-0 rounded d-flex">
		  <h1 className="header-title">
		  	<NavLink to='/'>Star DB</NavLink>
		  </h1>
		  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
		    <span className="navbar-toggler-icon"></span>
		  </button>

		  <div className="collapse navbar-collapse" id="navbarColor03">
		    <ul className="header-navbar-nav">
		      <li className="nav-item">
		        <NavLink className="nav-link" to='/people/'>People</NavLink>
		      </li>
		      <li className="nav-item">
		        <NavLink className="nav-link" to='/planets/'>Planets</NavLink>
		      </li>
		      <li className="nav-item">
		        <NavLink className="nav-link" to='/starships/'>Starships</NavLink>
		      </li>
		      <li className="nav-item">
		        <NavLink className="nav-link" to='/login/'>Login</NavLink>
		      </li>
		      <li className="nav-item">
		        <NavLink className="nav-link" to='/secret/'>Secret</NavLink>
		      </li>	      
		    </ul>		    
		  </div>
		</nav>
  )
}

export default Header;