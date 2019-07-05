import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

const Header = (props) => {
  return (
    
    	<nav className="navbar navbar-expand-lg navbar-light pb-0 rounded d-flex">
		  <h1 className="header-title">Star DB</h1>
		  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
		    <span className="navbar-toggler-icon"></span>
		  </button>

		  <div className="collapse navbar-collapse" id="navbarColor03">
		    <ul className="navbar-nav">
		      <li className="nav-item">
		        <Link className="nav-link" to='/people/'>People</Link>
		      </li>
		      <li className="nav-item">
		        <Link className="nav-link" to='/planets/'>Planets</Link>
		      </li>
		      <li className="nav-item">
		        <Link className="nav-link" to='/starships/'>Starships</Link>
		      </li>
		      <li className="nav-item">
		        <Link className="nav-link" to='/login'>Login</Link>
		      </li>
		      <li className="nav-item">
		        <Link className="nav-link" to='/secret'>Secret</Link>
		      </li>	      
		    </ul>		    
		  </div>
		</nav>
  )
}

export default Header;