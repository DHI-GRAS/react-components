import * as React from 'react'
import { Box, Typography, makeStyles } from '@material-ui/core'
import AspectRatioIcon from '@material-ui/icons/AspectRatio'

const useStyles = makeStyles({
	cardHeader: {
		backgroundColor: '#FFFFFF',
		borderBottom: '1px solid #DBE4E9',
		padding: '2px 12px',
		position: 'sticky',
		display: 'flex',
		top: 0,
		zIndex: 1,
	},
	cardWrapper: {
		flexGrow: 1,
		boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.16)',
		backgroundColor: '#FFFFFF',
		border: '1px solid #DBE4E9',
		borderRadius: 4,
		height: '100%',
		position: 'relative',
	},
	cardWrapperAbsolute: {
		flexGrow: 1,
		boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.16)',
		backgroundColor: '#FFFFFF',
		border: '1px solid #DBE4E9',
		borderRadius: 4,
		height: '100%',
		width: '100%',
		position: 'absolute',
		zIndex: 20,
		top: 0,
		left: 0,
	},
	cardContent: {
		width: '100%',
	},
	overlay: {
		width: '100%',
		height: '100%',
		backgroundColor: 'rgba(11, 69, 102, .5)',
		zIndex: 10,
		position: 'absolute',
		top: 0,
		left: 0,
	},
})

export type DashboardCardProps = {
  children?: React.ReactNode | undefined,
  description?: string,
  disabled?: boolean,
  headerChildren?: React.ReactNode | undefined,
  style?: any,
  title: string,
}

const DashboardCard: React.FC<DashboardCardProps> = ({
	children,
	description,
	disabled = false,
	headerChildren,
	style,
	title,
}) => {

	const classes = useStyles()
	const [ expand, setExpand ] = React.useState<boolean | undefined>(false)

	const expandCard = () => {

		setExpand(!expand)
		window.dispatchEvent(new Event('resize'))

	}

	return (
		<Box
			className={expand ? classes.cardWrapperAbsolute : classes.cardWrapper}
			style={{
      	...style,
      	transition: 'all .5s ease',
      	overflow: !disabled ? 'auto' : 'hidden',
			}}
		>
			{disabled && <Box className={classes.overlay}></Box>}

			<Box
				className={classes.cardHeader}
				alignItems={'center'}
				justifyContent={'flex-start'}
			>
				<Box mr={2}>
					<Typography
						color={'primary'}
						style={{ fontSize: 16 }}
						variant={'subtitle1'}
					>
						{title}
					</Typography>
					<Typography variant={'body2'} style={{ color: '#86A2B3' }}>
						{description}
					</Typography>
				</Box>
				<Box ml={'auto'} display={'flex'}>
					{headerChildren}
				</Box>
				<Box ml={2} display={'flex'}>
					<AspectRatioIcon
						color={'primary'}
						style={{ height: 24, width: 'auto', cursor: 'pointer' }}
						onClick={() => expandCard()}
					/>
				</Box>
			</Box>
			{children}
		</Box>
	)

}

export default DashboardCard
