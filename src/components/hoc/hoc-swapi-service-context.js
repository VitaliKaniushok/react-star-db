import React from 'react';
import {SwapiServiceConsumer} from '../swapi-service-context/';

const HocSwapiServiceContext = (mapMethodsToProps) => (Wrapped) => {

	return (props)=> {

		return (
			<SwapiServiceConsumer>
				{
					(swapiService) => {

						const serviceProps = mapMethodsToProps(swapiService);

						return (
							<Wrapped {...props} {...serviceProps} />
						);
					}					
				}
			</SwapiServiceConsumer>
		);
	}	
}

export default HocSwapiServiceContext;