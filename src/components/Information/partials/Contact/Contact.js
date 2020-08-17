import React from 'react';
import { Box, Link, Typography } from '@material-ui/core';

const style = {
  margin: 0,
};

const Contact = () => {
  return (
    <Box>
      <Typography variant="body2">
        With our global network of offices, we make sure you get the right
        answers to your local needs.
      </Typography>

      <Box py={0}>
        <Typography variant="body2" style={style}>
          DHI A/S
        </Typography>
        <Typography variant="body2" style={style}>
          Agern Alle 5, 2970 Hørsholm, Denmark
        </Typography>
        <Typography variant="body2" style={style}>
          <Link href="mailto:gras@dhigroup.com">gras@dhigroup.com</Link>
        </Typography>
        <Typography variant="body2" style={style}>
          +45 4516 9100
        </Typography>
        <Typography variant="body2" style={style}>
          CVR no: 36466871
        </Typography>
      </Box>
    </Box>
  );
};

export default Contact;
