import React from 'react';
import { render } from 'react-dom';

import App from './components/App';
import createStore from '../configureStore';
import { Provider as ReduxProvider } from 'react-redux';
import InitialState from './store/initialState';

import './styles/main.scss';

const store = createStore(InitialState);

render(
	<ReduxProvider store={store}>
		<App />
	</ReduxProvider>,
	document.getElementById('app')
);
