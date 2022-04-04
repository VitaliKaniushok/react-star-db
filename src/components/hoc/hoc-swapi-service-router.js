import React, {Component} from 'react';

const HocSwapiSeviceRouter = (View) => {

	return class  extends Component {
		
		state ={
			numPage: null,
			detailId: null
			// numPage: this.props.match.params.page ? this.props.match.params.page.split("page_")[1] : 1,
			// detailId: this.props.match.params.id
		}

		path = this.props.match.path ? this.props.match.path.split("/")[1] : "";
		
		changePageTo = (newId)=> {
			return ()=> {
				this.props.history.push( `/${this.path}/page_${newId}/`)
				this.setState({
					numPage:newId
				})
			}		
		}
					
		changeDetail = (id)=> {
			this.props.history.push(`/${this.path}/${this.props.match.params.page}/${id}`  );
			this.setState({
				detailId:id
			})			
		}

		componentDidMount() {
			if(!this.props.match.params.page) {
				this.props.history.push( `page_1/1`);
				
			} else {				
				
				this.setState({
					numPage:this.props.match.params.page.split("page_")[1],
					detailId: this.props.match.params.id
				})	
							
				
			}			
		}

		componentDidUpdate(prevProps) {
			
			if (this.props.match.params.page != prevProps.match.params.page) {
				
				this.setState({
					numPage:this.props.match.params.page.split("page_")[1]
				})
				
			}

			if (this.props.match.params.id != prevProps.match.params.id) {
				
					this.setState({
						detailId:this.props.match.params.id
					})
			}			
		}
		
		render () {
			return <View 
							changeDetail ={this.changeDetail} 
							numPage = {this.state.numPage} 
							id = {this.props.match.params.id} 
							path = {this.path} 
							changePageTo = {this.changePageTo} 
							detailId = {this.state.detailId} />
		}
	}
}

export default HocSwapiSeviceRouter;