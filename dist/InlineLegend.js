import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(() => ({
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
}));
const Legend = ({ imageSrc, length, range, colorRange, unit = '', }) => {
    const classes = useStyles({ colorRange });
    const [val, setVals] = useState();
    const [firstRangeItem, secondRangeItem] = range;
    const legendLength = length !== null && length !== void 0 ? length : 2 - 1;
    useEffect(() => {
        if (typeof range[0] === 'number' && typeof range[1] === 'number') {
            const arr = [];
            const diff = range[1] - range[0];
            const incr = diff / legendLength;
            for (let i = 0; i <= legendLength; i++) {
                const value = range[0] + incr * i;
                arr.push(value.toFixed(2));
            }
            setVals(arr);
        }
    }, [range]);
    const LegendUnits = typeof firstRangeItem === 'number' && typeof secondRangeItem === 'number' && val ? (React.createElement(Box, { display: 'flex', justifyContent: 'space-between' }, val.map((v, i) => (React.createElement(Typography, { key: i, className: classes.fontSize }, `${v}${unit}`))))) :
        firstRangeItem &&
            secondRangeItem && (React.createElement(Box, { display: 'flex', justifyContent: 'space-between' },
            React.createElement(Typography, { className: classes.fontSize }, firstRangeItem + unit),
            React.createElement(Typography, { className: classes.fontSize }, secondRangeItem + unit)));
    return (React.createElement(Box, { className: classes.maxWidth },
        imageSrc && React.createElement("img", { src: imageSrc, alt: '', className: classes.colorbar }),
        React.createElement("span", { className: `${classes.colorbar} ${classes.gradient}` }),
        LegendUnits));
};
export default Legend;
