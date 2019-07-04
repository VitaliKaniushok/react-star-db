import React, { Component } from 'react';
import ErrorBoundry from '../error-boundry/';
import Header from '../header/';
import RandomPlanet from '../random-planet/';
import { SwapiServiceProvider } from '../swapi-service-context/';
import SwapiService from '../../services/swapi-service.js';

import { PeoplePage, PlanetPage, StarshipPage } from '../pages/';

import './app.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';

export default class App extends Component {

    swapiService = new SwapiService();

	render() {		

		return (
			<ErrorBoundry>
				<SwapiServiceProvider value={this.swapiService}>
					<Router>
						<div className="app container">
							<Header />
							<RandomPlanet />

							<Route path='/people' component={PeoplePage} />
							<Route path='/planets' component={PlanetPage} />
							<Route path='/starships' component={StarshipPage} />			

						</div>
					</Router>
				</SwapiServiceProvider>
			</ErrorBoundry>
		);
	}
}