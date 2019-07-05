import React from 'react';
import Row from '../row';
import {withRouter} from 'react-router-dom';
import { PlanetList,PlanetDetails } from '../sw-components/';

const PlanetPage = ({ history, match }) => {

    const { id } = match.params;

	return (

		<Row leftContent={ <PlanetList showDetail={ (id) => { history.push(id) } } /> } 
						 rightContent={ <PlanetDetails itemId={id} /> } />
	);
}
export default withRouter(PlanetPage);