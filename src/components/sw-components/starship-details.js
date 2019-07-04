import React from 'react';
import ItemDetails from '../item-details';
import Record from '../record';
import {HocSwapiServiceContext} from '../hoc';

const StarshipDetails = (props) => {

	return (
		<ItemDetails {...props}>
	        <Record label='Cargo capacity' field='cargoCapacity'/>
	        <Record label='Crew' field='crew'/>
	        <Record label='Cost' field='costInCredits'/>
	    </ItemDetails>
	)
}

const mapMethodsToProps = (swapiService) => {

	return {
		getData:swapiService.getStarship,
		getImageUrl:swapiService.getImageStarship
	}
}

export default HocSwapiServiceContext(mapMethodsToProps)(StarshipDetails);