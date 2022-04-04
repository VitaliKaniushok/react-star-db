import React from 'react';
import Row from '../row';
import { withRouter } from 'react-router-dom';
import { StarshipList,StarshipDetails } from '../sw-components';
import HocSwapiSeviceRouter from '../hoc/hoc-swapi-service-router';

// const StarshipPage = ({ history, match }) => {

//     const { id } = match.params;

// 	return (

// 		<Row leftContent={ <StarshipList showDetail={ (id) => history.push(id) }/> } 
// 						 rightContent={ <StarshipDetails itemId={id}/> } />
// 	);    
// }
// export default withRouter(StarshipPage);
const StarshipPage =({changeDetail, numPage, id, path, changePageTo, detailId}) => {	

	return (
		<div>
			<Row 	leftContent={ <StarshipList 	showDetail={ changeDetail  }
														numPage ={numPage}
														id={id}
														path={path}													 
														changePage={changePageTo}/> }
					rightContent={ <StarshipDetails itemId={detailId} /> } />			
		</div>
	);
}
export default withRouter(HocSwapiSeviceRouter(StarshipPage));