import React from 'react';
import HocItemList from '../hoc/hoc-item-list.js';

import './item-list.css';

const ItemList = (props)=> {			

	const {data} = props; 

	const listGroup = ( data ) => {	

		return data.map((item) => {		
			const { id, name } = item;
			return (

				<li key={id} 
					className="list-group-item list-group-item-action"
					onClick={()=> props.showDetail(id)} >
					{name}
				</li>
			);
		});		
	}

	return (

		<ul className="list-item list-group list-group-item-action">
			{listGroup(data)}
		</ul>		
	)
	
};

export default HocItemList(ItemList);