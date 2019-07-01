import React from 'react';
import ItemDetails from '../item-details';
import Record from '../record';
import SwapiService from '../../services/swapi-service.js';

const swapiService = new SwapiService();

const {
	getPerson,
	getPlanet,
	getStarship,
	getImagePerson,
	getImagePlanet,
	getImageStarships
} = swapiService;

const PersonDetails = ({ itemId }) => {

	return (
		<ItemDetails 
	        itemId={itemId}
	    	getData={getPerson}
	    	getImageUrl={getImagePerson}>                  
	        
	        <Record label='Gender' field='gender'/>
	        <Record label='Years' field='birthYear'/>
	        <Record label='Eye color' field='eyeColor'/>
	    </ItemDetails>
	)
}

const PlanetDetails = () => {

}

const StarshipDetails = () => {

}

export {
	PersonDetails,
	PlanetDetails,
	StarshipDetails
}