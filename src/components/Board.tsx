import React from 'react';
import { Board } from '../store/types';
import Square from './Square';

const Board = ({ squares }: { squares: Board }) => {
	return (
		<div className='board'>
			<Square name={'s1'} value={squares.s1} />
			<Square name={'s2'} value={squares.s2} />
			<Square name={'s3'} value={squares.s3} />
			<Square name={'s4'} value={squares.s4} />
			<Square name={'s5'} value={squares.s5} />
			<Square name={'s6'} value={squares.s6} />
			<Square name={'s7'} value={squares.s7} />
			<Square name={'s8'} value={squares.s8} />
			<Square name={'s9'} value={squares.s9} />
		</div>
	);
};

export default Board;
