import React, { Component } from 'react';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator/';
import ImageDetails from './image-details.js';
import './item-details.css';

export default class itemDetails extends Component {
    
    state = {
        item:null,
        image:null,
        // loading:true,
        error:false
    }
    updateItem() {

        const { itemId, getData, getImageUrl } = this.props;

        this.setState({
            // loading:true,
            error:false
        });

        if (itemId) {

            getData(itemId)
            .then((item) => {
                this.setState({ 
                    item,
                    loading:false,
                    image:getImageUrl(itemId)
                });                
            })
            .catch(()=>{
                this.setState({
                    // loading:false,                   
                    error:true
                });
            });
        }            
    }

    componentDidMount() {

        this.updateItem();
    }

    componentDidUpdate(prevProps) {

        if( this.props.itemId != prevProps.itemId) 

            this.updateItem();
    }

    render() {

        const { item, image, loading, error } = this.state;

        if (error) {
            return <ErrorIndicator />
        }

        if(!item) {
            return <Spinner />
        }

        const { name } = item;

        return (       

            <div className="d-flex flex-wrap bg-light p-3 rounded">
                
                <ImageDetails image={image} />      
                
                <div className="item-detail-property m-3">
                    <h3 className="item-detail-name">{name}</h3>
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