import React from 'react';

import { Box, Grid, Typography } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import DHILogoBlue from './../../assets/images/DHI_Logo_Blue.png';
import PropTypes from 'prop-types';

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

const SidebarTitle = ({
  title = 'Current title',
  subTitle = [''],
  imageSelect = DHILogoBlue,
  imageFile = [],
  imageWidth = 38,
  backgroundColor = 'transparent',
  titleColor = 'primary',
  subTitleColor = 'secondary',
  bottomBorderSize,
  bottomBorderColor,
}) => {
  const classes = useStyles();
  return (
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
        {imageSelect && (
          <Grid item>
            <img
              src={imageFile[0] ? imageFile[0] : imageSelect}
              alt="DHI Logo"
              style={{ width: imageWidth }}
            />
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
  );
};

SidebarTitle.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.array,
  imageSelect: PropTypes.node,
  imageFile: PropTypes.node,
  imageWidth: PropTypes.number,
  backgroundColor: PropTypes.string,
  titleColor: PropTypes.string,
  subTitleColor: PropTypes.string,
  bottomBorderSize: PropTypes.number,
  bottomBorderColor: PropTypes.string,
};

export default SidebarTitle;
