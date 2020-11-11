import React from 'react';

import { useSelector } from 'react-redux';
import Board from './Board';
import RestartButton from './RestartButton';
import UndoButton from './UndoButton';
import GameModeButton from './GameModeButton';
import { RootState } from '../store/types';

const App = () => {
	const squares = useSelector((state: RootState) => state.board);
	const sign = useSelector((state: RootState) => state.currentSign);
	const winner = useSelector((state: RootState) => state.winner);
	const multiPlayerMode = useSelector(
		(state: RootState) => state.multiPlayerMode
	);

	return (
		<div className='game'>
			<div className='nav'>
				<GameModeButton />
				<RestartButton />
				<UndoButton />
			</div>
			<Board squares={squares} />
			<div className={`players_names_block ${winner ? 'show_winner' : ''}`}>
				<div className={`player player-o ${sign === 'x' ? 'active' : ''}`}>
					<span className='x'>X</span>
					<span className='name'>Player 1</span>
				</div>
				<div className='vs'>vs</div>
				<div className={`player player-x ${sign === 'o' ? 'active' : ''}`}>
					<span className='o'>O</span>
					<span className='name'>{multiPlayerMode ? 'Player 2' : 'BOT'}</span>
				</div>
				<div className='winner-alert'>
					The winner is: <span className={winner}>{winner}</span>
				</div>
			</div>
		</div>
	);
};

export default App;
