import * as React from 'react';
import { Box, Grid, Typography, ThemeProvider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import grasTheme from '../../styles/theme';

const useStyles = makeStyles({
  container: {
    padding: 16,
  },
  titleMain: {
    fontSize: 20,
    fontWeight: 500,
    padding: 0,
    margin: 0,
  },
  subTitle: {
    fontSize: 12,
    padding: 0,
    margin: 0,
  },
});
type SidebarTitleProps = {
  title: string;
  titleColor?: string;
  subTitle?: Array<string>;
  subTitleColor?: string;
  image?: string;
  imageWidth?: number;
  backgroundColor?: string;
  bottomBorderSize?: string | number;
  bottomBorderColor?: string;
};
const SidebarTitle = ({
  title = 'Current title',
  subTitle = [''],
  image,
  imageWidth = 38,
  backgroundColor = '#FFFFFF',
  titleColor = '#0b4566',
  subTitleColor = '#86a2b3',
  bottomBorderSize,
  bottomBorderColor,
}: SidebarTitleProps) => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={grasTheme}>
      <Box
        className={classes.container}
        style={{
          backgroundColor,
          borderBottom: `${bottomBorderSize}px solid ${bottomBorderColor}`,
        }}
      >
        <Grid container spacing={0} justify="space-between">
          <Grid item xs={10}>
            <Typography
              className={classes.titleMain}
              style={{ color: titleColor }}
              color="primary"
            >
              {title}
            </Typography>
          </Grid>
          {image && (
            <Grid item>
              <img src={image} alt="DHI Logo" style={{ width: imageWidth }} />
            </Grid>
          )}
        </Grid>
        {(subTitle || subTitle.length > 0) && (
          <>
            {subTitle.map((text, index) => {
              return (
                <Typography
                  key={`subtitle-${index}`}
                  className={classes.subTitle}
                  style={{ color: subTitleColor }}
                  color="secondary"
                >
                  {text}
                </Typography>
              );
            })}
          </>
        )}
      </Box>
    </ThemeProvider>
  );
};

export default SidebarTitle;
