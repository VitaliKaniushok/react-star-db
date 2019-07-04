import React from 'react';
import PropType  from 'prop-types';

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

ItemList.defaultProps = {
	showDetail: () => {}
}
ItemList.propTypes = {
	showDetail:PropType.func,
	data: PropType.arrayOf(PropType.object).isRequired,
	children:PropType.func.isRequired
}
export default ItemList;