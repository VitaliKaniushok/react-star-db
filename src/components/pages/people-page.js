import React, { Component } from 'react';
import Row from '../row';
import { PersonList,PersonDetails } from '../sw-components';

export default class PeoplePage extends Component {

	 state = {
        selectItem: 1
    };

    showDetail = (selectItem) => {
    	
        this.setState({
            selectItem
        });
    };

    render() {

    	return (

    		<Row leftContent={ <PersonList showDetail={this.showDetail}/> } 
							 rightContent={ <PersonDetails itemId={this.state.selectItem}/> } />

    	)
    }
}
