import React from 'react';
import { CircularProgress, LinearProgress, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
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
}));
const Loader = ({ isLoading = false, variant = 'blocking', }) => {
    const classes = useStyles();
    if (isLoading) {
        if (variant === 'blocking')
            return (React.createElement(Grid, { container: true, alignItems: 'center', justify: 'center', className: classes.blocking },
                React.createElement(CircularProgress, { color: 'inherit', size: 50, thickness: 5 })));
        return (React.createElement("div", { className: classes.topbar },
            React.createElement(LinearProgress, { color: 'primary' })));
    }
    return null;
};
export default Loader;
