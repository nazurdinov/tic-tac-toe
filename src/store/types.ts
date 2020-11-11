export interface RootState {
	multiPlayerMode: boolean;
	history: History;
	currentSign: Sign;
	winner: Winner;
	board: Board;
}

export type History = Array<Array<string>>;

export type Sign = 'x' | 'o';

export type Winner = '' | 'x' | 'o';

export type SquareName =
	| 's1'
	| 's2'
	| 's3'
	| 's4'
	| 's5'
	| 's6'
	| 's7'
	| 's8'
	| 's9';

export interface Board {
	s1: Sign | '';
	s2: Sign | '';
	s3: Sign | '';
	s4: Sign | '';
	s5: Sign | '';
	s6: Sign | '';
	s7: Sign | '';
	s8: Sign | '';
	s9: Sign | '';
}

export enum ActionTypes {
	CHANGE_THE_SIGN = 'CHANGE_THE_SIGN',
	SIGN_THE_SQUARE = 'SIGN_THE_SQUARE',
	RESTART_GAME = 'RESTART_GAME',
	SWITCH_MODE = 'SWITCH_MODE',
	CHECK_WINNER = 'CHECK_WINNER',
	WRITE_HISTORY = 'WRITE_HISTORY',
	UNDO = 'UNDO',
	BOT_MOVE = 'BOT_MOVE',
	SET_WINNER = 'SET_WINNER',
}
