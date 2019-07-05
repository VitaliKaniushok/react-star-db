import React from 'react';
import ItemDetails from '../item-details';
import Record from '../record';
import {HocSwapiServiceContext} from '../hoc';

const StarshipDetails = (props) => {

	return (
		<ItemDetails {...props}>	        
	        <Record label='Crew' field='crew'/>
	        <Record label='Passengers' field='passengers'/>	        
	    </ItemDetails>
	)
}

const mapMethodsToProps = (swapiService) => {

	return {
		getData:swapiService.getStarship,
		getImageUrl:swapiService.getImageStarship
	}
}
StarshipDetails.defaultProps ={
	itemId:12
}
export default HocSwapiServiceContext(mapMethodsToProps)(StarshipDetails);