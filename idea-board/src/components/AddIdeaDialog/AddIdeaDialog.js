import React, { Component } from 'react';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

class AddIdeaDialog extends Component {
	defaultState = () => ({
		title: '',
		description: ''
	})

	state = this.defaultState();

	handleCreateIdea = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	handleSubmitIdea = () => {
		const { title, description } = this.state;
		this.props.handleSetIdea(title, description);
		this.setState(() => this.defaultState())
		this.props.handleCloseDialog()
	}

	render() {
  	const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.props.handleCloseDialog}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        onClick={this.handleSubmitIdea}
      />,
    ];

		return (
        <Dialog
          title="Add a new Idea"
          actions={actions}
          modal={false}
          open={this.props.isOpen}
          onRequestClose={this.props.handleCloseDialog}
        >

	        <TextField
	        	autoFocus={true}
			      name="title"
			      floatingLabelText="Title"
			      style={{width: '100%', cursor: 'auto'}}
			      value={this.state.title}
			      onChange={this.handleCreateIdea}
			      maxLength={22}
			    />

			    <TextField
			      name="description"
			      floatingLabelText="Description"
			      multiLine
			      style={{width: '100%'}}
			      value={this.state.description}
			      onChange={this.handleCreateIdea}
			      maxLength={140}
			    />
          
        </Dialog>
		);
	}
};

export default AddIdeaDialog;
