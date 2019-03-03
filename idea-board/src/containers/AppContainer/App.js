import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as dataActions from '../../actions/dataActions';

import ContentAdd from 'material-ui/svg-icons/content/add';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Toggle from 'material-ui/Toggle';

import AddIdeaDialog from '../../components/AddIdeaDialog/AddIdeaDialog';
import Idea from '../../components/Idea/Idea';

import './App.css';

class App extends Component {
	state = {
		isAddIdeaDialogOpen: false,
    shouldSortByTitle: false
	}

	componentDidMount() {
    // this.seedLocalStorage();

		this.props.actions.getIdeas();
	}

  seedLocalStorage = () => {
    const ideas = {
      '1': {
        id: 1,
        title: 'title',
        description: 'description string, up to 140 characters',
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
      '2': {
        id: 2,
        title: 'title',
        description: 'LALALALALALAAL',
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
      '3': {
        id: 3,
        title: 'title',
        description: 'Lorem ipsum yeah cool cool...',
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
    }

    localStorage.setItem('ideas', JSON.stringify(ideas));
  }

	handleOpenDialog = () => {
    this.setState({isAddIdeaDialogOpen: true});
  };

  handleCloseDialog = () => {
    this.setState({isAddIdeaDialogOpen: false});
  };

	updateIdea = (id, field, value) => {
		this.props.actions.updateIdeaById(id, field, value)
	}

	deleteIdea = (id) => {
		if (window.confirm('Do you really want to delete this idea?')) {
			this.props.actions.deleteIdeaById(id);
		}
	}

	setIdea = (title, description) => {
		this.props.actions.setIdea(title, description);
	}

  handleToggleSortByTitle = () => {
    this.setState({shouldSortByTitle: !this.state.shouldSortByTitle})
  }

  sortByTitle = (a, b) => {
    var textA = a.title.toUpperCase();
    var textB = b.title.toUpperCase();
    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
  }

  sortByCreatedAt = (a, b) => {
    var timeA = a.createdAt;
    var timeB = b.createdAt;
    return (timeA < timeB) ? -1 : (timeA > timeB) ? 1 : 0;
  }

  render() {
  	const { ideas } = this.props;

  	let mainSection = null
  	if (ideas && ideas.length) {
      if (this.state.shouldSortByTitle) {
        console.log('shouldSortByTitle')
        ideas.sort(this.sortByTitle);
      } else {
        ideas.sort(this.sortByCreatedAt);
      }
  		mainSection = ideas.map((idea, i) => (
  			<Idea
  				key={idea.id}
  				idea={idea}
  				handleUpdateIdea={this.updateIdea}
  				handleDeleteIdea={this.deleteIdea}
				/>
    	))
  	} else {
  		mainSection = (
				<h3>Please add some ideas to your idea board with the button below :)</h3>
			);
  	}

    return (
      <div className="App">

      	<header className="App-header">
          <div className="App-header-container">
            <h3>Idea Board</h3>
            <Toggle
              label="Sort by title"
              labelPosition="right"
              style={{
                margin: '1em 0',
                width: '130px'
              }}
              toggled={this.state.shouldSortByTitle}
              onToggle={this.handleToggleSortByTitle}
            />
          </div>
        </header>

        <section className="App-section">
        	{ mainSection }
      	</section>

      	<FloatingActionButton className="App-fab" onClick={this.handleOpenDialog}>
          <ContentAdd />
        </FloatingActionButton>
        <AddIdeaDialog
        	isOpen={this.state.isAddIdeaDialogOpen}
        	handleCloseDialog={this.handleCloseDialog}
        	handleSetIdea={this.setIdea}
      	/>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    ideas: state.data.ideas && Object.values(state.data.ideas),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({
      ...dataActions
    }, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
