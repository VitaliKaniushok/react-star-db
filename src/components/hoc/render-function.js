import React from 'react';

const RenderFunction = (renderFunction) => (Wrapped) => {

	return (props) => {
		return (
			<Wrapped {...props}>
				{renderFunction}
			</Wrapped>
		)
	}	
}
export default RenderFunction;