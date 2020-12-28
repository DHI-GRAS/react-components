import React from 'react'
import {
	Card as CardMUI,
	CardContent,
	Typography,
	makeStyles,
} from '@material-ui/core'

const useStyles = makeStyles({
	card: {
		borderRadius: 4,
		display: 'flex',
		flexDirection: 'column',
		flexGrow: 1,
		padding: '1.6rem 2rem',
	},
	cardContent: {
		flexGrow: 1,
	},
	title: { color: '#F2F5F7' },
})

export type AboutCardProps = {
  title: string,
  description?: string,
  descriptionTitle?: string,
  children?: React.ReactNode | undefined,
}

const AboutCard: React.FC<AboutCardProps> = ({
	title,
	description,
	descriptionTitle,
	children,
}) => {

	const classes = useStyles()

	return (
		<CardMUI className={classes.card}>
			<CardContent className={classes.cardContent}>
				<Typography gutterBottom variant={'h3'}>
					{title}
				</Typography>
				<Typography variant={'subtitle1'}>
					{descriptionTitle}
				</Typography>
				<Typography variant={'body2'}>
					{description}
				</Typography>
			</CardContent>
			{children}
		</CardMUI>
	)

}

export default AboutCard
