import React from 'react';
import { Box, Typography } from '@material-ui/core';

const FAQ = () => {
  return (
    <Box>
      <Typography variant="subtitle1">
        Can I get such information from my area?
      </Typography>
      <Typography variant="body2">
        Yes satellites and our services are global!
      </Typography>
      <Typography variant="subtitle1">
        How often can I get this type of maps?
      </Typography>
      <Typography variant="body2">
        Potentially daily (and in some cases a few times per day), but this
        depends on the overpass schedule of the different satelittes.
      </Typography>
      <Typography variant="subtitle1">
        Can I always get information about historical flood events?
      </Typography>
      <Typography variant="body2">
        Yes sometimes, but this depends on the availibility of archived imagery
      </Typography>
      <Typography variant="subtitle1">What costs are associated?</Typography>
      <Typography variant="body2">
        Use this viewer to get an estimate of the associated costs and contact
        us for a more detailed quote.
      </Typography>
      <Typography variant="subtitle1">
        How quickly after the flooding can I get the information?
      </Typography>
      <Typography variant="body2">
        The raw satellite image is typically available within hours after the
        image acqusition. The time needed for analysis and production maps
        depends can vary from a few hours to days depending on the area size.
      </Typography>
      <Typography variant="subtitle1">
        Can we get data from future flood events?
      </Typography>
      <Typography variant="body2">
        Yes! Simply let us know in advance where and when you expect a flooding
        to occur, then we can initiate a tasking of new satellite images of the
        needed area/time
      </Typography>
    </Box>
  );
};

export default FAQ;
