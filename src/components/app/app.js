import React, {Component} from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
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

		return (
			<div className="app container">
				<Header />
				<RandomPlanet />
				<PersonList>
					{(item)=>{return item.name}}
				</PersonList>

				<PersonDetails itemId={1}/>
				

			</div>
		);
	}
}

