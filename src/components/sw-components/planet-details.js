import React from 'react';
import ItemDetails from '../item-details';
import Record from '../record';
import {HocSwapiServiceContext} from '../hoc';

const PlanetDetails = (props) => {

	return (
		<ItemDetails {...props}>	        
	        <Record label='Diameter' field='diameter'/>
	        <Record label='Population' field='population'/>
	        <Record label='Climate' field='climate'/>
	    </ItemDetails>
	)
}

const mapMethodsToProps = (swapiService) => {

	return {
		getData:swapiService.getPlanet,
		getImageUrl:swapiService.getImagePlanet
	}
}
PlanetDetails.defaultProps = {
	itemId:9
}
export default HocSwapiServiceContext(mapMethodsToProps)(PlanetDetails);