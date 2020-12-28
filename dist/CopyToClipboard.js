import React, { useState } from 'react';
import { Grid, Tooltip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import Clipboard from 'react-clipboard.js';
const useStyles = makeStyles(() => ({
    disabledRoot: {
        color: '#cfdbe2',
        cursor: 'no-drop',
    },
    enabledRoot: {
        color: '#0b4566',
        cursor: 'pointer',
    },
    gridItem: {
        width: 32,
    },
    clipboard: {
        background: 'none',
        border: '0px',
        outline: 'none',
    },
    outlineIcon: {
        width: 21,
        height: 21,
    },
}));
const CopyToClipboard = ({ disabled = false, successLabel = 'URL copied to Clipboard.', tooltipLabel = 'Copy URL', toCopy = window.location.href, afterCopy, }) => {
    const classes = useStyles();
    const [tooltip, setTooltip] = useState(tooltipLabel);
    const copy = () => {
        if (disabled)
            return;
        setTooltip(successLabel);
        if (afterCopy)
            afterCopy();
        setTimeout(() => {
            setTooltip(tooltipLabel);
        }, 5000);
    };
    return (React.createElement(Grid, { container: true, spacing: 0, justify: 'space-between', alignItems: 'flex-end', className: disabled ? classes.disabledRoot : classes.enabledRoot, onClick: copy },
        React.createElement(Grid, { item: true, className: classes.gridItem },
            React.createElement(Grid, { container: true, alignItems: 'center', justify: 'center' },
                React.createElement(Clipboard, { "data-clipboard-text": toCopy, className: `copy-clipboard ${classes.clipboard}` },
                    React.createElement(Tooltip, { title: tooltip },
                        React.createElement(FileCopyOutlinedIcon, { color: 'primary', className: classes.outlineIcon })))))));
};
export default CopyToClipboard;
