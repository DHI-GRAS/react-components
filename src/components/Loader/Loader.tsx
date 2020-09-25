import React, { CSSProperties } from 'react';
import { CircularProgress, LinearProgress, Grid } from '@material-ui/core';

const minorLoadingStyle: CSSProperties = {
  position: 'fixed',
  width: '100vw',
  top: 0,
  height: 4,
  zIndex: 2000,
  backgroundColor: 'white',
};

const majorLoadingStyle: CSSProperties = {
  position: 'fixed',
  width: '100vw',
  height: '100vh',
  zIndex: 2000,
  backgroundColor: 'rgba(13,57,88,0.9)',
  color: 'white',
};

type LoaderProps = {
  isLoading?: boolean;
  isMajorLoading?: boolean;
};

const Loader: React.FC<LoaderProps> = ({ isMajorLoading = false }) => {
  return (
    <>
      {isMajorLoading ? (
        <Grid
          container
          alignItems="center"
          justify="center"
          style={{ ...majorLoadingStyle }}
        >
          <CircularProgress color="inherit" size={50} thickness={5} />
        </Grid>
      ) : (
        <div style={{ ...minorLoadingStyle }}>
          <LinearProgress color="primary" />
        </div>
      )}
    </>
  );
};

export default Loader;
