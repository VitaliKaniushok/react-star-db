import React from 'react';
import { Redirect } from 'react-router-dom';

const LoginPage = ({ isLoggedIn, onLogin }) => {

	if (isLoggedIn) {
		return <Redirect to='' />
	}

	return (
		<div className="jumbotron text-center">
			<h3>Page in developing</h3>
			<p>Login to secret page</p>
			<button
				className="btn btn-success"
				// onClick={onLogin}
				>
				Login
			</button>
		</div>
	);
}
export default LoginPage;