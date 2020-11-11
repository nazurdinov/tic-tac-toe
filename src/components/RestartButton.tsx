import React, { memo } from 'react';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import { useDispatch } from 'react-redux';
import { restartGame } from '../store/actions';

const RestartButton = () => {
	const dispatch = useDispatch();

	const handleClick = () => {
		dispatch(restartGame());
	};

	return (
		<div className='restart-btn' onClick={handleClick}>
			<AutorenewIcon />
		</div>
	);
};

export default memo(RestartButton);
