import React, { memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import PeopleIcon from '@material-ui/icons/People';
import PersonIcon from '@material-ui/icons/Person';
import { restartGame, switchMode } from '../store/actions';
import { RootState } from '../store/types';

const GameModeButton = () => {
	const dispatch = useDispatch();

	const multiPlayerMode = useSelector(
		(state: RootState) => state.multiPlayerMode
	);

	const handleChange = () => {
		// console.log(hash(board));

		dispatch(switchMode());
		dispatch(restartGame());
	};

	return (
		<FormControlLabel
			control={
				<Checkbox
					icon={<PersonIcon />}
					checkedIcon={<PeopleIcon />}
					name='singlePlayerMode'
					checked={multiPlayerMode}
					onChange={handleChange}
				/>
			}
			label={multiPlayerMode ? '2 Player' : '1 Player'}
		/>
	);
};

export default memo(GameModeButton);
