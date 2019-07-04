import React, { Component } from 'react';
import Row from '../row';
import { PlanetList,PlanetDetails } from '../sw-components';

export default class PlanetPage extends Component {

	 state = {
        selectItem: 3
    };

    showDetail = (selectItem) => {
    	
        this.setState({
            selectItem
        });
    };

    render() {

    	return (

    		<Row leftContent={ <PlanetList showDetail={this.showDetail}/> } 
							 rightContent={ <PlanetDetails itemId={this.state.selectItem}/> } />

    	)
    }
}
