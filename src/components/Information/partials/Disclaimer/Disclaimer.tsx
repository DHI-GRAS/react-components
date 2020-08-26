import * as React from 'react';
import { Box, Typography } from '@material-ui/core';

const Disclaimer = () => {
  return (
    <Box>
      <Box pb={2}>
        <Typography variant="subtitle1">
          We provide this website as a service and for informational purposes
          only.
        </Typography>
      </Box>
      <Typography variant="body2">
        The transmission of this information does not create any form of
        relationship with us. You should not act upon information provided on
        this site without seeking our personal assistance. While we have
        attempted to maintain the information, the software and any other
        services on this site as accurately as possible, the site may contain
        errors or omissions for which we disclaim any and all liability. The
        material and contents posted on this site is provided without warranty
        of any kind.
      </Typography>
      <Typography variant="body2">
        We are not responsible for any loss of hardware, software or files,
        caused by the use of the web site or elements downloaded or used from/on
        the web site. Hence we make no warranty, that the web site or product or
        services provided on the web site, either by us or on our behalf
        (including free software downloads) will meet your requirements or will
        be uninterrupted, timely, secure or without errors, or that the website
        or the servers we use are free of viruses or bugs or are fully
        functional or accurate.
      </Typography>
    </Box>
  );
};

export default Disclaimer;
