import React from 'react';
import './nav-pages.css';
import { NavLink } from 'react-router-dom';

const NavPages = (props) => {

	const { pageCount, path } = props;

	const navItem = ( countPages ) => {

		let lists =[];

		for ( let i=1; i <= countPages; i++) {

			lists.push(

				<li key={i} className="nav-item">
					<NavLink className="nav-link" to={`/${path}/page_${i}/`} >{i}</NavLink>
				</li>
			)			
		}

		return lists;		
	}

	return (    
	    	
		<div>
			<p className="title">Page:</p>
			<ul className="pages-navbar-nav">
				{ navItem(pageCount) }  
			</ul>	
		</div>    
			  
	)
}

export default NavPages;