import React, { FC } from 'react'
import { CircularProgress, LinearProgress, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
	blocking: {
		position: 'fixed',
		left: 0,
		top: 0,
		right: 0,
		bottom: 0,
		height: '100vh',
		zIndex: 2000,
		backgroundColor: 'rgba(13,57,88,0.9)',
		color: '#ffffff',
	},
	topbar: {
		position: 'fixed',
		left: 0,
		top: 0,
		right: 0,
		height: '4px',
		zIndex: 2000,
		color: 'white',
	},
}))

interface Props {
  isLoading?: boolean,
  variant?: 'topbar' | 'blocking',
}

const Loader: FC<Props> = ({
	isLoading = false,
	variant = 'blocking',
}) => {

	const classes = useStyles()
	if (isLoading) {

		if (variant === 'blocking') return (
			<Grid
				container
				alignItems={'center'}
				justify={'center'}
				className={classes.blocking}
			>
				<CircularProgress color={'inherit'} size={50} thickness={5} />
			</Grid>
		)

		return (
			<div className={classes.topbar}>
				<LinearProgress color={'primary'} />
			</div>
		)

	}

	return null

}

export default Loader
