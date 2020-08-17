import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  withTheme,
} from '@material-ui/core';
import { About, Contact, Disclaimer, FAQ, Privacy, Terms } from './partials';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import grasTheme from './../../styles/theme';

const panels = [
  {
    title: 'FAQ',
    component: FAQ,
  },
  {
    title: 'About',
    component: About,
  },
  {
    title: 'Contact',
    component: Contact,
  },
  {
    title: 'Disclaimer',
    component: Disclaimer,
  },

  {
    title: 'Privacy',
    component: Privacy,
  },
  {
    title: 'Terms',
    component: Terms,
  },
];

const Information = () => {
  const [expanded, setExpanded] = React.useState();

  const handleChange = (panel) => (e, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box>
      {panels.map(({ title, component: Component }) => (
        <Accordion
          key={title}
          expanded={expanded === title}
          onChange={handleChange(title)}
        >
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon
                style={{
                  color: grasTheme.palette.primary.main,
                  padding: 4,
                  width: '16px',
                }}
              />
            }
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography variant="h5" style={{ fontSize: 12 }}>
              {title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Component />
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

Information.propTypes = {
  title: PropTypes.string,
  component: PropTypes.elementType,
};

export default Information;
