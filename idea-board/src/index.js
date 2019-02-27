import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import App from './containers/AppContainer/App';
// Material UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import './index.css';

const store = configureStore();

const app = (
	<Provider store={ store }>
		<MuiThemeProvider muiTheme={ getMuiTheme() }>
			<App />
		</MuiThemeProvider>
	</Provider>
);

ReactDOM.render(app, document.getElementById('root'));
