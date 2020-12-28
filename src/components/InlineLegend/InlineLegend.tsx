import React, { FC, useState, useEffect } from 'react'
import { Box, Typography } from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles'

interface StyleProps {
	colorRange?: string[],
}
const useStyles = makeStyles<Theme, StyleProps>(() => ({
	colorbar: {
		width: '100%',
		height: 6,
		borderRadius: 4,
		display: 'inline-block',
	},
	gradient: {
		background: ({ colorRange }) => (colorRange ? `linear-gradient(to right, ${colorRange.join(', ')})` : '#000'),
	},
	maxWidth: {
		width: '100%',
	},
	fontSize: {
		fontSize: 10,
	},
}))

export type LegendProps = {
  imageSrc?: string,
  length?: number,
  range: number[] | string[],
  unit?: string,
  colorRange?: string[],
}

const Legend: FC<LegendProps> = ({
	imageSrc,
	length,
	range,
	colorRange,
	unit = '',
}) => {

	const classes = useStyles({ colorRange })

	const [ val, setVals ] = useState<string[] | undefined>()

	const [ firstRangeItem, secondRangeItem ] = range
	const legendLength = length ?? 2 - 1

	useEffect(() => {

		if (typeof range[ 0 ] === 'number' && typeof range[ 1 ] === 'number') {

			const arr: string[] = []
			const diff: number = range[ 1 ] - range[ 0 ]
			const incr: number = diff / legendLength
			for (let i = 0; i <= legendLength; i++) {

				const value = range[ 0 ] + incr * i
				arr.push(value.toFixed(2))

			}
			setVals(arr)

		}


	}, [ range ]) // eslint-disable-line


	const LegendUnits = typeof firstRangeItem === 'number' && typeof secondRangeItem === 'number' && val ? (
		<Box display={'flex'} justifyContent={'space-between'}>
			{val.map((v: string, i: number) => (
				<Typography key={i} className={classes.fontSize}>
					{`${v}${unit}`}
				</Typography>
			))}
		</Box>
	) :
		firstRangeItem &&
		secondRangeItem && (
		<Box display={'flex'} justifyContent={'space-between'}>
			<Typography className={classes.fontSize}>
				{firstRangeItem + unit}
			</Typography>
			<Typography className={classes.fontSize}>
				{secondRangeItem + unit}
			</Typography>
		</Box>
		)

	return (
		<Box className={classes.maxWidth}>
			{imageSrc && <img src={imageSrc} alt={''} className={classes.colorbar} />}
			<span className={`${classes.colorbar} ${classes.gradient}`} />
			{LegendUnits}
		</Box>
	)

}

export default Legend
