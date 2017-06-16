import React from 'react';
import https from "https";

class CommitItem extends React.Component{

	propTypes:{
		Item: React.PropTypes.object.isRequired
	}

	render(){
		console.log("render functhon commitItem", this.props.commitItem);
		if(this.props.commitItem.author!=null)
			return(
				<tr>
					<td>{this.props.commitItem.commit.author.date} </td>
					<td>{this.props.commitItem.commit.author.name}({this.props.commitItem.author.login}) </td>
					<td>{this.props.commitItem.commit.author.email} </td>
					<td>{this.props.commitItem.commit.message} </td>
					<td>{this.props.commitItem.commit.comment_count} </td>
					<td>{this.props.commitItem.author.site_admin.toString()} </td>
				</tr>
			)
		else{
			return(
				<tr>
					<td>Unknown</td>
					<td>Unknown</td>
					<td>Unknown</td>
					<td>{this.props.commitItem.commit.message} </td>
					<td>{this.props.commitItem.commit.comment_count} </td>
					<td>Unknown</td>
				</tr>
			)
		}
	}
}

export default CommitItem