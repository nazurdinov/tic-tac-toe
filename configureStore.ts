import { createStore, applyMiddleware, compose } from 'redux';
import { reducer } from './src/store/reducer';
import thunk from 'redux-thunk';
import { RootState } from './src/store/types';

export default function configureStore(initialState: RootState) {
	const composeEnhancers =
		(window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

	return createStore(
		reducer,
		initialState,
		composeEnhancers(applyMiddleware(thunk))
	);
}
