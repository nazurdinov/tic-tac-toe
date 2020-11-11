import { RootState } from './types';

export const InitialState: RootState = {
	multiPlayerMode: false,
	history: [],
	currentSign: 'x',
	winner: '',
	board: {
		s1: '',
		s2: '',
		s3: '',
		s4: '',
		s5: '',
		s6: '',
		s7: '',
		s8: '',
		s9: '',
	},
};

export default InitialState;
