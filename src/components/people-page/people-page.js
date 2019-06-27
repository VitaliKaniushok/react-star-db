import React, { Component } from 'react';
import ItemList from '../item-list';
import ItemDetails from '../item-details';
import Row from '../row';
import SwapiService from '../../services/swapi-service.js';

export default class PeoplePage extends Component {

    state = {
        personId: 1
    }

    swapiService = new SwapiService();

    showDetail = (personId) => {

        this.setState({
            personId
        });
    };    

    render() {

        const itemList = ( 

            <ItemList showDetail={this.showDetail}
                        getData ={this.props.getDate} />
        );

        const personDetail = (
            <ItemDetails personId={this.state.personId}
            				getData={this.swapiService.getPerson}/>
        );

        return (

            <Row leftContenet={itemList} rightContent={personDetail} />

        );
    }
}