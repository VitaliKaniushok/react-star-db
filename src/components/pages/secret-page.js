import React from 'react';
import { Redirect } from 'react-router-dom';


const SecretPage = ({ isLoggedIn }) => {
	
	if (isLoggedIn) {

		return (
			<div className="jumbotron text-center">
				<h3>Welcome to Secret Page!!!</h3>
			</div>
		);
	}

	return <Redirect to ='/login' />
	
	// return <h4 className="text-center text-monospace text-danger">You should not see this!!!</h4>
}

export default SecretPage;
