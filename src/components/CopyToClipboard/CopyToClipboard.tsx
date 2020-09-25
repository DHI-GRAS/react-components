import * as React from 'react';
import { Grid, Tooltip } from '@material-ui/core';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import Clipboard from 'react-clipboard.js';
const disabledStyle = {
  // borderBottom: '1px solid #cfdbe2',
  color: '#cfdbe2',
  cursor: 'no-drop',
};

const enabledStyle = {
  // borderBottom: '1px solid #0b4566',
  color: '#0b4566',
  cursor: 'pointer',
};

export type CopyToClipboardProps = {
  disabled?: boolean;
  helperText?: string;
  url?: boolean;
  message?: string;
};

export const mockCopy: VoidFunction = () => {
  // call this function
};

const CopyToClipboard: React.FC<CopyToClipboardProps> = ({
  disabled = false,
  helperText = '',
  message = '',
}) => {
  const [copyUrl] = React.useState(window.location.href);
  const [tooltip, setTooltip] = React.useState(
    helperText ? helperText : message ? 'Copy text' : 'Copy URL'
  );

  const copyAction = () => {
    // mockCopy();
    if (message) {
      setTooltip('Text copied to Clipboard.');
      setTimeout(() => {
        setTooltip(helperText ? helperText : 'Copy text');
      }, 5000);
    } else {
      setTooltip('URL copied to Clipboard.');
      setTimeout(() => {
        setTooltip(helperText ? helperText : 'Copy URL');
      }, 5000);
    }
  };

  const copy = () => {
    if (disabled !== true) copyAction();
  };

  return (
    <Grid
      container
      spacing={0}
      justify="space-between"
      alignItems="flex-end"
      style={disabled === true ? disabledStyle : enabledStyle}
      onClick={() => copy()}
    >
      <Grid item style={{ width: 32 }}>
        <Grid container alignItems="center" justify="center">
          <Clipboard
            data-clipboard-text={message ? message : copyUrl}
            className="copy-clipboard"
            style={{ background: 'none', border: '0px', outline: 'none' }}
          >
            <Tooltip title={tooltip}>
              <FileCopyOutlinedIcon
                color="primary"
                style={{
                  width: 21,
                  height: 21,
                }}
              />
            </Tooltip>
          </Clipboard>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CopyToClipboard;
