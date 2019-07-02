import React, {Component} from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import Row from '../row';
import {
	PersonDetails,
	PlanetDetails,
	StarshipDetails
} from '../sw-components/sw-details.js';

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
    }

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
			<div className="app container">
				<Header />
				<RandomPlanet />
				<Row leftContent={personList} rightContent={personDetails} />
			</div>
		);
	}
}