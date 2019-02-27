import React, { Component } from 'react';
import moment from 'moment';
import { Card, CardActions, CardText } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import ActionDelete from 'material-ui/svg-icons/action/delete';

import './Idea.css';

const styles = {
	input: {
    padding: '10px 0 0 16px',
    fontSize: '24px'
	},
	textArea: {
		padding: '10px 0 0 16px',
		fontSize: '14px'
	}
}

class Idea extends Component {

	handleUpdateIdea = (e) => {
		let field = e.target.name;
		let value = e.target.value;
		let id = this.props.idea.id;
		this.props.handleUpdateIdea(id, field, value);
	}

	render() {
		const { idea, handleDeleteIdea } = this.props;
		return (
			<Card 
				className="Idea-card" 
				containerStyle={{
					display: 'flex',
					flexFlow: 'column',
					height: '100%',
					backgroundColor: '#ffffb3'
				}}
			>
		    <TextField
		      name="title"
		      style={styles.input}
		      defaultValue={idea.title}
		      onChange={this.handleUpdateIdea}
		      underlineShow={false}
		      maxLength={22}
		    />
			  <TextField
		      name="description"
		      multiLine
		      style={styles.textArea}
		      defaultValue={idea.description}
		      onChange={this.handleUpdateIdea}
		      underlineShow={false}
		      maxLength={140}
		    />

		    <div style={{display: 'flex', justifyContent: 'space-between', marginTop: 'auto'}}>
			    <CardText>
			    	<p>created @ {moment(idea.createdAt).format('MMM D YYYY, h:mm a')}</p>
			    	<p>updated @ {moment(idea.updatedAt).format('MMM D YYYY, h:mm a')}</p>
		    	</CardText>

			    <CardActions style={{textAlign: 'right', marginTop: 'auto'}}>
			      <IconButton tooltip="Delete idea" onClick={() => handleDeleteIdea(idea.id)}>
				      <ActionDelete color={'#e6afaf'} hoverColor={'#f14a4a'} />
				    </IconButton>
			    </CardActions>
		    </div>
		  </Card>
		);
	}
};

export default Idea;