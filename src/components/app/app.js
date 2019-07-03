import React, {Component} from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import Row from '../row';
import {SwapiServiceProvider} from '../swapi-service-context';
import SwapiService from '../../services/swapi-service.js';
import PersonDetails from '../sw-components/person-details.js';

import {
	PersonList,
	PlanetList,
	StarshipList
} from '../sw-components/sw-iltem-lists.js';

import './app.css';

export default class App extends Component {

	 state = {
        personId: 1
    }

    showDetail = (personId) => {
    	
        this.setState({
            personId
        });
    };

    swapiService = new SwapiService();

	render() {

		const personList = (
			<PersonList showDetail={this.showDetail}>
				{(item)=>{return item.name}}
			</PersonList>
		);

		const personDetails = (
			<PersonDetails itemId={this.state.personId}/>
		);

		return (
			<SwapiServiceProvider value={this.swapiService}>
				<div className="app container">
					<Header />
					<RandomPlanet />
					<Row leftContent={personList} rightContent={personDetails} />
				</div>
			</SwapiServiceProvider>
		);
	}
}