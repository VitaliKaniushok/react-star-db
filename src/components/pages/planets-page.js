import React from 'react';
import Row from '../row';
import {withRouter} from 'react-router-dom';
import { PlanetList,PlanetDetails } from '../sw-components/';
import HocSwapiSeviceRouter from '../hoc/hoc-swapi-service-router';

// const PlanetPage = ({ history, match }) => {

//     const { id } = match.params;

// 	return (

// 		<Row leftContent={ <PlanetList showDetail={ (id) => { history.push(id) } } /> } 
// 						 rightContent={ <PlanetDetails itemId={id} /> } />
// 	);
// }
// export default withRouter(PlanetPage);

const PlanetPage =({changeDetail, numPage, id, path, changePageTo, detailId}) => {	

	return (
		<div>
			<Row 	leftContent={ <PlanetList 	showDetail={ changeDetail  }
														numPage ={numPage}
														id={id}
														path={path}													 
														changePage={changePageTo}/> }
					rightContent={ <PlanetDetails itemId={detailId} /> } />			
		</div>
	);
}
export default withRouter(HocSwapiSeviceRouter(PlanetPage));