import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	changeTheSign,
	signTheSquare,
	checkWinner,
	writeHistory,
	botMove,
} from '../store/actions';
import { SquareName, Sign, RootState } from '../store/types';

const Square = ({ name, value }: { name: SquareName; value: Sign | '' }) => {
	const { currentSign, board, winner, multiPlayerMode } = useSelector(
		(state: RootState) => state
	);

	const dispatch = useDispatch();

	const handleClick = (e: any) => {
		e.preventDefault();
		if (!winner) {
			const square: SquareName = e.target.getAttribute('data-name');

			if (board[square] === '') {
				(e.target as HTMLInputElement).classList.add(currentSign);
				dispatch(writeHistory(square, currentSign));
				dispatch(signTheSquare(square, currentSign));
				dispatch(changeTheSign(currentSign));

				dispatch(checkWinner());

				if (!multiPlayerMode) {
					dispatch(botMove());
				}
			}
		}
	};

	return (
		<div
			onClick={handleClick}
			data-name={`${name}`}
			className={`square ${name} ${value}`}
		>
			{value}
		</div>
	);
};

export default memo(Square);
