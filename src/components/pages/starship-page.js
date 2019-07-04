import React, { Component } from 'react';
import Row from '../row';
import { StarshipList,StarshipDetails } from '../sw-components';

export default class StarshipPage extends Component {

	 state = {
        selectItem: 15
    };

    showDetail = (selectItem) => {
    	
        this.setState({
            selectItem
        });
    };

    render() {

    	return (

    		<Row leftContent={ <StarshipList showDetail={this.showDetail}/> } 
							 rightContent={ <StarshipDetails itemId={this.state.selectItem}/> } />

    	)
    }
}
