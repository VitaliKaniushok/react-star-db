import React, { Component } from 'react';
import Spinner from '../spinner';
import './item-details.css';

export default class itemDetails extends Component {
    
    state = {
        item:null,
        image:null
    }
    updateItem() {

        const { itemId, getData, getImageUrl } = this.props;

        if(!itemId) {
            return;
        };

        this.setState({
            item:null
        });

        getData(itemId)
            .then((item) => {
                this.setState({ 
                    item,
                    image:getImageUrl(itemId)
                });                
            });
    }

    componentDidMount() {

        this.updateItem();
    }

    componentDidUpdate(prevProps) {

        if( this.props.itemId !== prevProps.itemId) 

            this.updateItem();
    }

    render() {

        const { item, image } = this.state; 

        if(!item) {
            return <Spinner />
        }

        const { name } = item;

        return (       

            <div className="d-flex flex-wrap bg-light p-3 rounded">     
                <img className="item-detail-image rounded" src={image}/>      
                
                <div className="item-detail-property m-3">
                    <h3>{name}</h3>
                    <ul className="list-group list-group-flush">
                        { 
                            React.Children.map(this.props.children, (child)=>{
                                
                                return React.cloneElement(child, {item})
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }
}