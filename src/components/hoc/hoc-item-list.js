import React, {Component} from 'react';
import Spinner from '../spinner/';
import ErrorIndicator from '../error-indicator/';

const HocItemList = (View) => {

	return class  extends Component {
		
		state = {
			data:null,
			loading:true,
			error:false
		}		

		update() {
			this.setState({ 
				laoding:true,
				error:false
			});

			if (this.props.numPage) {
				this.props.getData(this.props.numPage)			
				.then((data) => {					
					this.setState({ 
						data,
						loading:false,
					});
				})
				.catch(()=>{
					this.setState({
						loading:false,
						error:true
					});
				});
			}			
		}

		componentDidUpdate(prevProps) {
			
			if (this.props.numPage != prevProps.numPage) {
				this.update();
			}
		}

		componentDidMount() {
			this.update();			
		}

		render() {

			const { data, loading, error } = this.state;
			if (loading) {
				
				return <Spinner />
			}

			if (error) {

				return <ErrorIndicator />
			}

			return <View {...this.props} data={data} />			
		}	
	}
}

export default HocItemList; 