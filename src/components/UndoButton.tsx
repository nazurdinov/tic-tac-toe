import React, { memo, useCallback } from 'react';
import HistoryIcon from '@material-ui/icons/History';
import { useDispatch, useSelector } from 'react-redux';
import { undoAction } from '../store/actions';
import { RootState } from '../store/types';

const UndoButton = () => {
	const dispatch = useDispatch();
	const history = useSelector((state: RootState) => state.history);
	const multiPlayerMode = useSelector(
		(state: RootState) => state.multiPlayerMode
	);

	const handleClick = () => {
		if (history.length) {
			dispatch(undoAction());
			if (!multiPlayerMode) {
				dispatch(undoAction());
			}
		}
	};

	return (
		<div className='undo-btn' onClick={handleClick}>
			<HistoryIcon />
		</div>
	);
};

export default memo(UndoButton);
