import React, { Component } from 'react';
import './item-details.css';

export default class ImageDetails extends Component {

	state = {
		isError: false		
	}

	fallback = ()=> {

		this.setState({
			isError:true
		})
	}
	loadImage = () => {

		this.setState({
			isError:false,			
		})
	}

	componentDidUpdate(prevProps) {

        if( this.props.image !== prevProps.image) 

            this.loadImage();
    }

	render() {

		if ( this.state.isError ) {

			return (
				<div className="item-detail-image item-detail-error-img rounded"> {"Sorry, \n no foto \n in the database"}</div>
			)
		}

		return (
			<img className="item-detail-image rounded" src={this.props.image} onError={this.fallback} alt=''/>
		)
	}
}