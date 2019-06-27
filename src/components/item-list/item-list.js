import React,{ Component } from 'react';
import Spinner from '../spinner';

import './item-list.css';

export default class ItemList extends Component {

	state = {
		itemList:null
	};

	componentDidMount() {

		const { getData } = this.props;

		getData()			
			.then((itemList) => {
				this.setState({ itemList });
			});
	};

	listGroup( arrData ) {	

		return arrData.map((item) => {		
			const { id, name } = item
			return (

				<li key={id} 
					className="list-group-item list-group-item-action"
					onClick={()=> this.props.showDetail(id)} >
					{name}
				</li>
			);
		});		
	};

	render() {		

		const { itemList } = this.state;

		if(!itemList) {

			return <Spinner />
		};

		const listGroup = this.listGroup(itemList);

		return (

			<ul className="list-item list-group list-group-item-action">
				{listGroup}
			</ul>		
		);
	}
}