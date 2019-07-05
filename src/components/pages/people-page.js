import React from 'react';
import Row from '../row';
import {withRouter} from 'react-router-dom';
import { PersonList,PersonDetails } from '../sw-components/';

const PeoplePage =({ history, match }) => {

    const {id} = match.params;
	
	return (

		<Row leftContent={ <PersonList showDetail={ (id) => history.push(id)} /> } 
						 rightContent={ <PersonDetails itemId={id} /> } />
	);
}
export default withRouter(PeoplePage);