import React, { Component}  from 'react';
import PropType  from 'prop-types';
import SwapiService from '../../services/swapi-service.js';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

import './random-planet.css';

export default class RandomPlanet extends Component {

	static defaultProps = {
		interval: 60000
	};

	static propTypes = {
		interval: PropType.number
	}

	swapiService = new SwapiService();

	state = {
		planet:{},
		loading:true,
		isError:false,
		errMessage:''
	};		

	onPlanetLoaded = (planet) => {
		this.setState({
			planet,
			loading:false
		});
	};

	onErrorLoading = (err) => {

		this.setState({
			loading:false,
			isError:true,
			errMessage: err.message
		});
	};

	updateView =() => {
		const id = Math.floor(Math.random()*18) + 2;
		
		this.swapiService.getPlanet(id)
			.then(this.onPlanetLoaded)
			.catch(this.onErrorLoading);		
	};

	componentDidMount() {

		const { interval } = this.props;
		this.updateView();
		this.interval = setInterval(this.updateView,interval);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	render() {

		const { planet, loading, errMessage, isError } = this.state;

		const errorIndicate = isError ? <ErrorIndicator err={errMessage} /> : null;
		const spinner = loading ? <Spinner /> : null;
		const content = !(loading || isError) ? <PlanetView planet={planet} /> : null;		

		return (
		    <div className="d-flex flex-wrap bg-light mt-3 mb-5 p-3 rounded random-planet">  
			    {spinner}
			    {content}
			    {errorIndicate}
		    </div>
		);
	};	
};

const PlanetView = ({ planet }) => {

	const { id, name, population, rotationPeriod, diameter } = planet;

	return (

		<React.Fragment>

			<img className="random-planet-image img-thumbnail rounded" src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt=""/>	   
	    	
	    	<div className="random-planet-property m-3 ml-sm-5">
	    		<h3> {name}</h3>
	    		<ul className="list-group list-group-flush">
		    		<li className="list-group-item">Population {population}</li>
		    		<li className="list-group-item">Rotation period  {rotationPeriod}</li>
		    		<li className="list-group-item">Diameter {diameter}</li>
	    		</ul>
	    	</div>

		</React.Fragment>		
	);
};