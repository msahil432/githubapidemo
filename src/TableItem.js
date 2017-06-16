import React from 'react';
import {render} from 'react-dom';
import CommitDetails from './commitDetails'
import https from "https";

class TableItem extends React.Component{
	
	constructor(props) {
    	super(props)
    	this.gotoCommits = this.gotoCommits.bind(this)
	}


	propTypes:{
		Item: React.PropTypes.object.isRequired
	}

	gotoCommits(){
		console.log("going to commit");
		var url = this.props.Item.commits_url.replace("https://api.github.com", "");
		var item = this.props.Item;
		console.log(url.replace("{/sha}",""));
		var opthons = {
	    	host: 'api.github.com',
	    	path: url.replace("{/sha}",""),
	    	method: 'GET',
	    	//setTimeout(function() {}, 10000);
		    headers: {
		        'Content-Type': 'applicathon/json'
		    }
		};
		var req = https.request(opthons, function(res)
		{
		    var output = '';
		    res.setEncoding('utf8');
		    res.on('data', function (chunk) {
		        output += chunk;
		    });

		    res.on('end', function() {
		        var obj = JSON.parse(output);
		        render(<CommitDetails Item={item} commitData = {obj}/>, document.getElementById('myid1'));
		        console.log(obj);
		        //console.log(obj);
		        //render(<Test content={obj}/>, document.getElementById('myid1'));
		    });
		});
		req.on('error', function(err) {
		res.send('error: ' + err.message);
		});
		req.end();
	}

	render(){
		console.log("render functhon TableItem")
		return(
			<tr onClick={this.gotoCommits}>
				<td onClick = {this.gotoCommits}> {this.props.Item.id} </td>
				<td>{this.props.Item.full_name} </td>
				<td>{this.props.Item.private.toString()} </td>
				<td>{this.props.Item.owner.type} </td>
				<td>{this.props.Item.description} </td>
				<td>{this.props.Item.created_at} </td>
				<td>{this.props.Item.watchers_count} </td>
				<td>{this.props.Item.size} </td>
			</tr>
		)
	}
}

export default TableItem