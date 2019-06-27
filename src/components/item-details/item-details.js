import React, { Component } from 'react';
import Spinner from '../spinner';
import './item-details.css';

export default class itemDetails extends Component {
    
    state = {
        item:null
    };
    updateItem() {

        const { itemId, getData } = this.props;

        if(!itemId) {

            return;
        };

        this.setState({
            item:null
        });

        getData(itemId)
            .then((item) => {
                this.setState({ item });                
        });
    };

    componentDidMount() {
        const { itemId, getData } = this.props;
        console.log(itemId)

        this.updateItem();
    };

    componentDidUpdate(prevProps) {

        if( this.props.itemId !== prevProps.itemId) 

            this.updateItem();
    };

    render() {

        const { item } = this.state; 

        if(!item) {
            return <Spinner />
        }

        const { id, gender, name, eyeColor, birthYear } = item;

        return (       

            <div className="d-flex flex-wrap bg-light p-3 rounded">     
                <img className="item-detail-image rounded" src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt=""/>      
                
                <div className="item-detail-property m-3">
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