import * as React from 'react';
import { Box, Grid, IconButton, Tooltip, makeStyles } from '@material-ui/core';
import {
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  ExpandLess as ExpandLessIcon,
  ExpandMore as ExpandMoreIcon,
} from '@material-ui/icons';

export const useStyle = makeStyles({
  icon: {
    backgroundColor: '#fff',
    height: 22,
  },
  activeIcon: {
    backgroundColor: '#0b4566',
    '& path': {
      fill: '#fff',
    },
  },
});

// icons example
// const icons: Array<{ id: number; component: React.FC; tooltip: string }> = [
//   {
//     id: 1,
//     component: ExpandMoreIcon,
//     tooltip: 'Information',
//   },
// ];

type SidebarControlProps = {
  handleToggleSidebar?: () => void;
  icons?: Array<{ id: number; component: React.FC; tooltip: string }>;
  mobile?: boolean;
  openSidebar?: boolean;
};

const SidebarControl: React.FC<SidebarControlProps> = ({
  handleToggleSidebar,
  icons,
  mobile = false,
  openSidebar,
}) => {
  const classes = useStyle();
  const [tab, setTab] = React.useState<number | undefined>();

  return (
    <Box
      flexGrow={1}
      display="flex"
      flexDirection={mobile === true ? 'row' : 'column'}
      style={{ overflowY: 'auto', height: '100%' }}
    >
      <Box>
        <IconButton
          onClick={handleToggleSidebar}
          style={{ backgroundColor: '#fff' }}
        >
          {openSidebar === true && mobile !== true && (
            <ChevronRightIcon className={classes.icon} color="primary" />
          )}
          {openSidebar === false && mobile !== true && (
            <ChevronLeftIcon className={classes.icon} color="primary" />
          )}
          {openSidebar === true && mobile === true && (
            <ExpandMoreIcon className={classes.icon} color="primary" />
          )}
          {openSidebar === false && mobile === true && (
            <ExpandLessIcon className={classes.icon} color="primary" />
          )}
        </IconButton>
      </Box>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        style={{ height: 'calc(100% - 72px)' }}
      >
        {icons &&
          icons.map(({ id, component: Component, tooltip }) => (
            <Tooltip placement="left" key={id} title={tooltip}>
              <IconButton onClick={() => setTab(id)}>
                <Component />
              </IconButton>
            </Tooltip>
          ))}
      </Grid>
    </Box>
  );
};

export default SidebarControl;
