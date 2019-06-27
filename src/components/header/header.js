import React from 'react';
import './header.css';


const Header = (props) => {
  return (
    
    	<nav className="navbar navbar-expand-lg navbar-light pb-0 rounded d-flex">
		  <h1 className="header-title">Star DB</h1>
		  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
		    <span className="navbar-toggler-icon"></span>
		  </button>

		  <div className="collapse navbar-collapse" id="navbarColor03">
		    <ul className="navbar-nav">
		      <li className="nav-item active">
		        <a className="nav-link" href="#">People<span className="sr-only">(current)</span></a>
		      </li>
		      <li className="nav-item">
		        <a className="nav-link" href="#">Starship</a>
		      </li>
		      <li className="nav-item">
		        <a className="nav-link" href="#">Planets</a>
		      </li>		      
		    </ul>		    
		  </div>
		</nav>
    
  )
}

export default Header;
