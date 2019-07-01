import React from 'react';

import './item-list.css';

const ItemList = (props)=> {			

	const {data} = props; 

	const listGroup = ( data ) => {	

		return data.map((item) => {

			const { id } = item;			
			const label = props.children(item);

			return (

				<li key={id} 
					className="list-group-item list-group-item-action"
					onClick={()=> props.showDetail(id)} >
					{label}
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

export default ItemList;