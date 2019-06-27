import React, { Component } from 'react';
import Spinner from '../spinner';
import SwapiService from '../../services/swapi-service.js';
import './person-details.css';

export default class PersonId extends Component {
    
    swapiService = new SwapiService();

    state = {
        person:null
    };

    updatePerson() {

        const { personId } = this.props;

        if(!personId) {

            return;
        }

        this.setState({
            person:null
        })

        this.swapiService
            .getPerson(personId)
            .then((person) => {
                this.setState({ person });                
            });
    };

    componentDidMount() {
        this.updatePerson();
    };

    componentDidUpdate(prevProps) {

        if( this.props.personId !== prevProps.personId) 

            this.updatePerson();
    };

    render() {

        const { person } = this.state; 

        if(!person) {
            return <Spinner />
        }

        const { id, gender, name, eyeColor, birthYear } = person;

        return (       

            <div className="d-flex flex-wrap bg-light p-3 rounded">     
                <img className="person-detail-image rounded" src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt=""/>      
                
                <div className="person-detail-property m-3">
                    <h3>{name}</h3>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Gender {gender}</li>
                        <li className="list-group-item">Years  {birthYear}</li>
                        <li className="list-group-item">Color eyes {eyeColor}</li>
                    </ul>
                </div>
            </div>
        );
    }
}