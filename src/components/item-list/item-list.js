import React, {useEffect, useState} from 'react';
import PropType  from 'prop-types';
import NavPages from '../nav-pages/';

import './item-list.css';

const ItemList = (props)=> {			

	const { data: {desc, count}, changePage, id : activeDetailId, showDetail, path } = props;

	const [pageCount, setPageCount] = useState(0);

	useEffect (()=> {
		
		let tempCount = count/10;
		if(count % 10) {
			++tempCount;
		}
		setPageCount(tempCount);

	},[count]);

	useEffect (()=> {
		showDetail(desc[0].id);
	},[desc]);

	const listGroup = ( data, activeDetailId ) => {	

		return data.map((item) => {

			const { id } = item;	
			const label = props.children(item);

			let isActive = (activeDetailId == id) ? true : false;

			return (

				<li key={id} 
					className={"item-list list-group-item list-group-item-action" + (isActive ? " active" : "")}
					onClick={()=> showDetail(id)} >
					{label}
				</li>
			);
		});		
	}

	return (

		<div>			
			<ul className="list-item list-group list-group-item-action">
				{listGroup(desc, activeDetailId)}
			</ul>
			
			<NavPages pageCount={pageCount}
						path={path}											  				  
						changePage = {changePage} />
		</div>
	)	
};

ItemList.defaultProps = {
	showDetail: () => {},
	desc:[{}]
}
ItemList.propTypes = {
	showDetail:PropType.func,
	desc: PropType.arrayOf(PropType.object).isRequired,
	children:PropType.func.isRequired
}
export default ItemList;