import * as React from 'react'
import { Box, Typography } from '@material-ui/core'

const colorbarStyle = {
	width: '100%',
	height: 6,
	borderRadius: 4,
}

export type LegendProps = {
  src: string,
  /**
   * *Only relevant when `range` is present. Represents the amount of ticks distributed between min/max values(including them).
   */
  length?: number | undefined,
  /**
   * Min/Max range for the Legend ticks.
   */
  range?: number[] | string[] | undefined,
  /**
   * Append a unit at the end of the values. (%, °C, £, $)
   */
  unit?: string | undefined,
}

const Legend: React.FC<LegendProps> = ({
	src, length, range, unit = '',
}) => {

	const [ val, setVals ] = React.useState<string[] | undefined>()

	React.useEffect(() => {

		if (range && typeof range[ 0 ] === 'number' && typeof range[ 1 ] === 'number') {

			length--
			const arr: string[] = []
			const diff: number = range[ 1 ] - range[ 0 ]
			const incr: number = diff / length
			for (let i = 0; i <= length; i++) {

				const value = range[ 0 ] + incr * i
				arr.push(value.toFixed(2))

			}
			setVals(arr)

		}
		// eslint-disable-next-line
  
	}, [ range ])

	return (
		<Box style={{ width: '100%' }}>
			<img src={src} alt={''} style={colorbarStyle} />
			{range ?
				typeof range[ 0 ] === 'number' && typeof range[ 1 ] === 'number' && val ? (
					<Box display={'flex'} justifyContent={'space-between'}>
						{val.map((v: string, i: number) => (
							<Typography key={i} style={{ fontSize: 10 }}>
								{`${v}${unit}`}
							</Typography>
						))}
					</Box>
				) :
					range[ 0 ] &&
          range[ 1 ] && (
            <Box display={'flex'} justifyContent={'space-between'}>
	<Typography style={{ fontSize: 10 }}>
		{range[ 0 ] + unit}
	</Typography>
	<Typography style={{ fontSize: 10 }}>
		{range[ 1 ] + unit}
	</Typography>
            </Box>
					) :
				''
      }
		</Box>
	)

}

export default Legend
