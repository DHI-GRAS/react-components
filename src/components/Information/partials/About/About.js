import React from 'react';
import { Box, Link, Typography } from '@material-ui/core';

const About = () => {
  return (
    <Box>
      <Typography variant="subtitle1">About this tool</Typography>
      <Typography variant="body2">
        This tool is intended to facilitate easy use of the API access to
        altimetry data prepared for use in MetOcean studies and for validation
        of and assimilation in hydrodynamical models.
      </Typography>
      <Typography variant="subtitle1">How to use it</Typography>
      <Typography variant="body2">
        Select the area of interest for which you want to get altimetry data.
        Moreover, selecting time interval, satellites and/or data filters may
        help you filter the data. To be noted that you need to get approval /
        authorization from us in order to download data.
      </Typography>
      <Typography variant="subtitle1">How data filtering is done</Typography>
      <Typography variant="body2">
        The data filtering and editing routines are supported by expert
        knowledge provided by colleagues from The National Space Institute at
        the Technical University of Denmark, also known as DTU Space.
      </Typography>
      <Typography variant="subtitle1">About DHI</Typography>
      <Typography variant="body2">
        DHI are the first people you should call when you have a tough challenge
        to solve in a water environment – be it a river, a reservoir, an ocean,
        a coastline, or an aquifer. Our knowledge of water environments is
        second-to-none. It represents 50 years of dedicated research and
        real-life experience from more than 140 countries. We strive to make
        this knowledge globally accessible to clients and partners by
        channelling it through our local teams and unique software. Our world is
        water. So whether you need to save water, share it fairly, improve its
        quality, quantify its impact or manage its flow, we can help. Our
        knowledge, combined with our team's expertise and the power of our
        technology, holds the key to unlocking the right solution. Read more on
        <Link href="https://www.dhigroup.com/"> dhigroup.com</Link>
      </Typography>
    </Box>
  );
};

export default About;
