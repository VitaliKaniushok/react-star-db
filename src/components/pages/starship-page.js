import React from 'react';
import Row from '../row';
import { withRouter } from 'react-router-dom';
import { StarshipList,StarshipDetails } from '../sw-components';

const StarshipPage = ({ history, match }) => {

    const { id } = match.params;

	return (

		<Row leftContent={ <StarshipList showDetail={ (id) => history.push(id) }/> } 
						 rightContent={ <StarshipDetails itemId={id}/> } />
	);    
}
export default withRouter(StarshipPage);