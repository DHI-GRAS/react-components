import * as React from 'react';
import { Grid, Tooltip, ThemeProvider, TextField } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
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

type CopyToClipboardProps = {
  disabled?: boolean;
  helperText?: string;
  url?: boolean;
  message?: string;
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
  const [inputEl, setInputEl] = React.useState(
    document.createElement('div') as HTMLInputElement
  );
  const theme = useTheme();
  const copyAction = () => {
    (inputEl.children[1].children[0] as HTMLInputElement).select();
    document.execCommand('copy');

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
    <ThemeProvider theme={theme}>
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
            <Tooltip title={tooltip}>
              <FileCopyOutlinedIcon
                color="primary"
                style={{
                  width: 21,
                  height: 21,
                }}
              />
            </Tooltip>
          </Grid>
        </Grid>
        <TextField
          style={{ left: '-9999px', position: 'absolute' }}
          ref={(input) => setInputEl(input as HTMLInputElement)}
          data-cy="input-url"
          id="api-url-field"
          label="API URL"
          value={message ? message : copyUrl}
        />
      </Grid>
    </ThemeProvider>
  );
};

export default CopyToClipboard;
