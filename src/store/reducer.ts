import initialState from './initialState';
import { Reducer } from 'redux';
import { RootState, ActionTypes } from '../store/types';

export const reducer: Reducer<RootState> = (state = initialState, action) => {
	switch (action.type) {
		case ActionTypes.CHANGE_THE_SIGN:
			return { ...state, currentSign: action.payload };
		case ActionTypes.SIGN_THE_SQUARE:
			return {
				...state,
				board: { ...state.board, [action.payload.square]: action.payload.sign },
			};
		case ActionTypes.RESTART_GAME:
			return { ...initialState, multiPlayerMode: state.multiPlayerMode };
		case ActionTypes.SWITCH_MODE:
			return {
				...state,
				multiPlayerMode: !state.multiPlayerMode,
			};
		case ActionTypes.SET_WINNER:
			return {
				...state,
				winner: action.payload.sign,
			};
		case ActionTypes.WRITE_HISTORY:
			return {
				...state,
				history: [
					[action.payload.square, action.payload.sign],
					...state.history,
				],
			};
		case ActionTypes.UNDO:
			return {
				...state,
				board: { ...state.board, [state.history[0][0]]: '' },
				history: state.history.slice(1),
				winner: '',
				currentSign: state.history[0][1],
			};

		case ActionTypes.BOT_MOVE:
			return {
				...state,
			};
		default:
			return state;
	}
};
