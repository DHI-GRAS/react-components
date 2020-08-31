import * as React from 'react';
import { Box, Grid, Typography, ThemeProvider } from '@material-ui/core';
import {
  makeStyles,
  Theme,
  StyledProps,
  useTheme,
} from '@material-ui/core/styles';

const useStyles = makeStyles<Theme, StyledProps>({
  container: {
    padding: 16,
  },
  mainTitle: {
    fontSize: 20,
    fontWeight: 500,
    color: '#0b4566',
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
const SidebarTitle: React.FC<SidebarTitleProps> = ({
  title = 'Current title',
  subTitle = [''],
  image,
  imageWidth = 38,
  backgroundColor = '#FFFFFF',
  titleColor = '#0b4566',
  subTitleColor = '#86a2b3',
  bottomBorderSize,
  bottomBorderColor,
}) => {
  const classes = useStyles({} as StyledProps);
  const theme: Theme = useTheme();
  return (
    <ThemeProvider theme={theme}>
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
              className={classes.mainTitle}
              style={{ color: titleColor }}
              variant={'h2'}
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
            {subTitle.map((text: string, index: number) => {
              return (
                <Typography
                  key={`subtitle-${index}`}
                  style={{ color: subTitleColor }}
                  color="secondary"
                  variant="h4"
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
