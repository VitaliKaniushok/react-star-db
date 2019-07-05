import React from 'react';
import ItemDetails from '../item-details/';
import Record from '../record/';
import {HocSwapiServiceContext} from '../hoc/';

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
PersonDetails.defaultProps = {
	itemId:1
}
export default HocSwapiServiceContext(mapMethodsToProps)(PersonDetails);