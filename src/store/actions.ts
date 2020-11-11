import hash from 'object-hash';
import botMoves, { BotMovesItem } from '../botMoves';

import { ActionTypes, Sign, SquareName } from './types';

export const changeTheSign = (currentSign: Sign) => {
	return {
		type: ActionTypes.CHANGE_THE_SIGN,
		payload: currentSign === 'x' ? 'o' : 'x',
	};
};

export const signTheSquare = (square: SquareName, sign: Sign) => {
	return {
		type: ActionTypes.SIGN_THE_SQUARE,
		payload: { square, sign },
	};
};

export const restartGame = () => {
	return {
		type: ActionTypes.RESTART_GAME,
	};
};

export const switchMode = () => {
	return {
		type: ActionTypes.SWITCH_MODE,
	};
};

export const checkWinner = () => {
	return function (dispatch: Function, getState: Function) {
		const { board, history } = getState();

		const { s1, s2, s3, s4, s5, s6, s7, s8, s9 } = board;

		if (
			(s1 && s1 === s2 && s2 === s3) ||
			(s4 && s4 === s5 && s5 === s6) ||
			(s7 && s7 === s8 && s8 === s9) ||
			(s1 && s1 === s4 && s4 === s7) ||
			(s2 && s2 === s5 && s5 === s8) ||
			(s3 && s3 === s6 && s6 === s9) ||
			(s1 && s1 === s5 && s5 === s9) ||
			(s3 && s3 === s5 && s5 === s7)
		) {
			const winner_sign = history[0][1];

			dispatch(setWinner(winner_sign));
		}
	};
};

export const setWinner = (sign: Sign) => {
	return {
		type: ActionTypes.SET_WINNER,
		payload: { sign },
	};
};

export const writeHistory = (square: SquareName, sign: Sign) => {
	return {
		type: ActionTypes.WRITE_HISTORY,
		payload: { square, sign },
	};
};

export const undoAction = () => {
	return {
		type: ActionTypes.UNDO,
	};
};

export function botMove() {
	return function (dispatch: Function, getState: Function) {
		const { history, board, winner } = getState();

		if (history.length === 9 || winner) {
			return;
		}

		setTimeout(() => {
			let square: SquareName = 's1';
			let data: Array<BotMovesItem> = [];
			const boardHash = hash(board);
			const first_x = history[history.length - 1][0];

			switch (history.length) {
				case 1:
					square = history[0][0] !== 's5' ? 's5' : 's1';
					break;
				case 3:
					if (first_x === 's5') {
						data = botMoves.step_3.first_x_center;
					} else {
						data = botMoves.step_3.first_x_not_center;
					}

					break;
				case 5:
					if (first_x === 's5') {
						data = botMoves.step_5.first_x_center;
					} else {
						data = botMoves.step_5.first_x_not_center;
					}

					break;
				case 7:
					if (first_x === 's5') {
						data = botMoves.step_7.first_x_center;
					} else {
						data = botMoves.step_7.first_x_not_center;
					}

					break;
				default:
					break;
			}

			if (history.length > 1) {
				const hashItem = data.filter(
					(item: BotMovesItem) => item.hash === boardHash
				);
				square = hashItem[0].square;
			}

			dispatch(writeHistory(square, 'o'));
			dispatch(signTheSquare(square, 'o'));
			dispatch(changeTheSign('o'));

			dispatch(checkWinner());
		}, 200);
	};
}
