import React, { Component } from 'react';
import ErrorBoundry from '../error-boundry/';
import Header from '../header/';
import RandomPlanet from '../random-planet/';
import { SwapiServiceProvider } from '../swapi-service-context/';
import SwapiService from '../../services/swapi-service.js';

// import { StarshipDetails } from '../sw-components/';

import { PeoplePage, PlanetPage, StarshipPage, LoginPage, SecretPage } from '../pages/';

import './app.css';

import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

export default class App extends Component {

    swapiService = new SwapiService();

    state = {
    	isLoggedIn:false
    }

    onLogin = () => {

    	this.setState({
    		isLoggedIn:true
    	})
    }

	render() {

		const { isLoggedIn } = this.state;

		return (
			<ErrorBoundry>
				<React.StrictMode>
					<SwapiServiceProvider value={this.swapiService}>
						<Router>
							<div className="app container">
								<Header />
								<RandomPlanet />

								<Switch>

									<Route path='/'
											render={() => <h2>Welcome to StarDb</h2>}
											exact={true} />

									<Route path='/people/:page?/:id?/' component={PeoplePage} />
									<Route path='/planets/:page?/:id?/' component={PlanetPage} />
									<Route path='/starships/:page?/:id?/' component={StarshipPage} />

									{/* <Route 
										path='/starships/:id?/details' 
										render={() => (
											<LoginPage 
												isLoggedIn={isLoggedIn}
												onLogin={ this.onLogin }/>
										)} /> */}
										
									<Route 
										path='/login' 
										render={() => (
											<LoginPage 
												isLoggedIn={isLoggedIn}
												onLogin={ this.onLogin }/>
										)} />

									<Route 
										path='/secret' 
										render={() => (
											<SecretPage isLoggedIn={isLoggedIn}/>
										)} />

									<Redirect to ='/'/>
									<Route render ={ ()=> <h1>Page not found</h1> } />
								</Switch>
							</div>
						</Router>
					</SwapiServiceProvider>
				</React.StrictMode>			
			</ErrorBoundry>
		);
	}
}