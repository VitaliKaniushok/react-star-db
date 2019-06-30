import React, { Component } from 'react';
import ItemList from '../item-list';
import ItemDetails from '../item-details';
import Row from '../row';
import SwapiService from '../../services/swapi-service.js';
import Record from '../record';

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
                        getData ={this.swapiService.getAllPeople} />
        );

        const personDetail = (
            <ItemDetails 
                itemId={this.state.personId}
            	getData={this.swapiService.getPerson}>                  
                
                <Record label='Gender' field='gender'/>
                <Record label='Years' field='birthYear'/>
                <Record label='Eye color' field='eyeColor'/>
            </ItemDetails>
        );

        return (

            <Row leftContenet={itemList} rightContent={personDetail} />

        );
    }
}