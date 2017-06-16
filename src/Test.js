import React from 'react';
import TableItem from './TableItem';

class Test extends React.Component{

	render(){
		console.log("render function");
		return(
				<div> 
					<h2>Projects created in last 7 days on Github are: {this.props.content.total_count}</h2>
					<h3>Here are last {this.props.content.items.length} projects: </h3>
					<table>
						<th>ID </th>
						<th>Name </th>
						<th>Private </th>
						<th>Owned Type </th>
						<th>Description </th>
						<th>Created </th>
						<th>Watchers </th>
						<th>Size </th>
						{	this.props.content.items.map(function(item){
								return <TableItem Item = {item} key = {item.id}/>
							})
						}
					</table>
				</div>
		)
	}
}

export default Test