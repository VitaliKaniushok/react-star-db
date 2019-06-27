import React, {Component} from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import PeoplePage from '../people-page/';
import SwapiService from '../../services/swapi-service.js';

import './app.css';

export default class App extends Component {
	
	swapiService = new SwapiService();

	 state = {
        personId: 1
    }

    showDetail = (personId) => {
        this.setState({
            personId
        });
    }

	render() {

		return (
			<div className="app container">
				<Header />
				<RandomPlanet />
				<PeoplePage getDate = {this.swapiService.getAllPeople}/>

				

			</div>
		);
	}
}

