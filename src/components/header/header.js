import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import './header.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {

	const [heightNavLink, setHeightNavLink] = useState(0);
	const ref = useRef(null);

	const setCalcHeight = ()=> {
		const navBarCollapse = document.getElementsByClassName("collapse");
		setHeightNavLink(ref.current.scrollHeight);
		navBarCollapse[0].style.setProperty("--calc-height", ref.current.scrollHeight+"px");
	}

	useEffect(() => {

		if(ref.current.scrollHeight) {
			setCalcHeight();
		}
		
	});

	useLayoutEffect(() => {

		if (window) {
			function updateSize() {
				if(ref.current.scrollHeight !== heightNavLink) {
					setCalcHeight();
				}
			 }
			 window.addEventListener('resize', updateSize);
			 updateSize();
			 return () => window.removeEventListener('resize', updateSize);
		}
		
	 },[]);

	const toggleNav = () => {

		const navBarCollapse = document.getElementsByClassName("collapse");
		navBarCollapse[0].classList.toggle("show");		
	}

  	return (
    	<nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded d-flex">
		  <h1 className="header-title">
		  	<NavLink to='/'>Star DB</NavLink>
		  </h1>
		  <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation" onClick={toggleNav}>
		    <span className="navbar-toggler-icon"></span>
		  </button>

		  <div className="collapse navbar-collapse" id="navbarColor03">
		   
		    	<ul ref={ref} className="header-navbar-nav mr-auto">
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