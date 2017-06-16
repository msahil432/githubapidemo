import React from 'react';
import CommitItem from './commitItem';


class CommitDetails extends React.Component{

	propTypes:{
		Item: React.PropTypes.object.isRequired,
		commitData : React.PropTypes.object.isRequired
	}

	goBack(){
		console.log("back to home");
	}

	render(){
		return(
			<div>
				<button onClick={this.goBack}>Back</button>
				<h1>The commit details of {this.props.Item.full_name} are : </h1>
				<h3>Here are last {this.props.commitData.length} commits: </h3>
					<table>
						<th>Date </th>
						<th>Author </th>
						<th>E Mail </th>
						<th>Message </th>
						<th>Comments </th>
						<th>Owner of repo </th>
						{	this.props.commitData.map(function(item){
								return <CommitItem commitItem = {item} key = {item.sha}/>
							})
						}
					</table>
			</div>
		)
	}
}

export default CommitDetails