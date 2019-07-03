import React from 'react';
import ItemDetails from '../item-details';
import Record from '../record';
import HocSwapiServiceContext from '../hoc/hoc-swapi-service-context.js';

const PersonDetails = (props) => {

	return (
		<ItemDetails {...props}>
	        <Record label='Gender' field='gender'/>
	        <Record label='Years' field='birthYear'/>
	        <Record label='Eye color' field='eyeColor'/>
	    </ItemDetails>
	)
}

const mapMethodsToProps = (swapiService) => {

	return {
		getData:swapiService.getPerson,
		getImageUrl:swapiService.getImagePerson
	}
}

export default HocSwapiServiceContext(PersonDetails,mapMethodsToProps);

// const PlanetDetails = () => {

// }

// const StarshipDetails = () => {

// }

// export {
// 	PersonDetails,
// 	PlanetDetails,
// 	StarshipDetails
// }