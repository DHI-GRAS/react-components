import * as React from 'react'
import { CircularProgress, LinearProgress, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
	spinner: {
		position: 'fixed',
		width: '100vw',
		top: 0,
		height: 4,
		zIndex: 2000,
		backgroundColor: 'white',
	},
	topbar: {
		position: 'fixed',
		width: '100vw',
		height: '100vh',
		zIndex: 2000,
		backgroundColor: 'rgba(13,57,88,0.9)',
		color: 'white',
	},
}))

export type LoaderProps = {
  isLoading?: boolean,
  variant?: 'topbar' | 'spinner',
}

const Loader: React.FC<LoaderProps> = ({
	isLoading = false,
	variant = 'spinner',
}) => {

	const classes = useStyles()
	if (isLoading) {

		if (variant === 'spinner') return (
			<Grid
				container
				alignItems={'center'}
				justify={'center'}
				className={classes.spinner}
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
