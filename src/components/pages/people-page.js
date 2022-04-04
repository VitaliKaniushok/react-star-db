import React from 'react';
import Row from '../row';
import {withRouter} from 'react-router-dom';
import { PersonList,PersonDetails } from '../sw-components/';
import HocSwapiSeviceRouter from '../hoc/hoc-swapi-service-router';

// const PeoplePage =({ history,  match }) => {

// 	const { page, id } = match.params;
// 	console.log(props)

// 	console.log(" page: "+page+"; id: "+id);
// 	const [numPage, setNumPage] = useState( page ? page.split("page_")[1] : 1);
// 	const [detailId, setDetailId] = useState( id );
// 	const path = match.path ? match.path.split("/")[1] : "";

// 	const changePageTo = (newId)=> {
// 		return ()=> {
// 			history.push( `/${path}/page_${newId}/`)
// 			setNumPage(newId);
// 		}		
// 	}
	
// 	const changeDetail = (id)=> {
// 		history.push( id );
// 		setDetailId(id)
// 		console.log("changeDetail "+id)
// 	}

// 	useEffect(()=> {
// 		if(!page) {
// 			history.push( `page_1/1`);
// 			console.log("history.push")
// 		} else {
// 			const numPage = page.split("page_")[1];
// 			setNumPage(numPage);
			
// 			console.log("useEffect")
// 		}
// 	},[page]);

// 	useEffect(()=> {
// 		if(id) {
// 			setDetailId(id);
// 			console.log("setId")
// 		}
// 	},[id]);

// 	console.log(match)

// 	console.log("-------------------------------------------------------")

// 	return (
// 		<div>
// 			<Row 	leftContent={ <PersonList 	showDetail={ changeDetail  }
// 														numPage ={numPage}
// 														id={id}
// 														path={path}													 
// 														changePage={changePageTo}/> }
// 					rightContent={ <PersonDetails itemId={detailId} /> } />			
// 		</div>
// 	);
// }
// export default withRouter(PeoplePage);

const PeoplePage =({changeDetail, numPage, id, path, changePageTo, detailId}) => {	

	return (
		<div>
			<Row 	leftContent={ <PersonList 	showDetail={ changeDetail  }
														numPage ={numPage}
														id={id}
														path={path}													 
														changePage={changePageTo}/> }
					rightContent={ <PersonDetails itemId={detailId} /> } />			
		</div>
	);
}
export default withRouter(HocSwapiSeviceRouter(PeoplePage));