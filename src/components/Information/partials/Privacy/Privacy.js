import React from 'react';
import { Box, Typography, Link, withStyles } from '@material-ui/core';

import styles from './styles';

const noSpacing = {
  padding: 0,
  margin: 0,
};

const Privacy = ({ classes }) => {
  return (
    <Box>
      <Box py={1}>
        <Typography variant="body2">
          At DHI ("DHI", "we" or “us”) data protection and confidentiality is a
          high priority. This privacy policy sets out clear guidelines for how
          DHI processes your personal data. Further, we explain how we use the
          personal data that you leave and/or provide when you visit our
          websites or when you interact with us with various business relations.
        </Typography>
      </Box>
      <Box py={1}>
        <Typography gutterBottom variant="subtitle1">
          1. DATA CONTROLLER AND CONTACT INFORMATION
        </Typography>
        <Typography variant="body2">
          This website is operated and owned by:
        </Typography>
        <Typography variant="body2" style={noSpacing}>
          DHI A/S
        </Typography>
        <Typography variant="body2" style={noSpacing}>
          Agern Alle 5
        </Typography>
        <Typography variant="body2" style={noSpacing}>
          2970 Hørsholm
        </Typography>
        <Typography variant="body2" style={noSpacing}>
          CVR no: 36466871 +45 4516 9200
        </Typography>
        <Typography variant="body2">info@dhigroup.com</Typography>
      </Box>
      <Box py={1}>
        <Typography gutterBottom variant="subtitle1">
          2. COLLECTION OF PERSONAL DATA
        </Typography>
        <Typography variant="body2">
          You will always be informed in connection with collection of personal
          data about you. The personal data collected by us may include, for
          instance, your name, your email address, IP address and similar
          identification data, including information about your navigation on
          the website.
        </Typography>
        <Typography variant="body2">
          In connection with the submission of your data it will always be
          stated whether the submission is voluntary or necessary for completing
          the desired action.
        </Typography>
        <Typography variant="body2">
          Your personal data is collected in one or several of the below cases:
        </Typography>
        <Typography variant="body2">
          * When you sign up for DHI newsletter. The legal basis for such
          processing is the GDPR art. 6(1)(a).
        </Typography>
        <Typography variant="body2">
          * When you use DHI’s websites. The legal basis for such processing is
          the GDPR art. 6(1)(f). The legitimate interest under (f) is for us to
          improve our websites and to understand how our users use the websites.
        </Typography>
        <Typography variant="body2">
          * When you download our software or applications. The legal basis for
          such processing is the GDPR art. 6(1)(b).
        </Typography>
        <Typography variant="body2">
          * When you sign up for an event. The legal basis for such processing
          is the GDPR art. 6(1)(b).
        </Typography>
        <Typography variant="body2">
          * When you sign up for an online or physical training course. The
          legal basis for such processing is the GDPR art. 6(1)(b).
        </Typography>
        <Typography variant="body2">
          * When you download our eBooks. The legal basis for such processing is
          the GDPR art. 6(1)(b).
        </Typography>
        <Typography variant="body2">
          * When you create an account at DHI webshops. The legal basis for such
          processing is the GDPR art. 6(1)(b).
        </Typography>
        <Typography variant="body2">
          * When you buy products or services at our webshops. The legal basis
          for such processing is the GDPR art. 6(1)(b).
        </Typography>
        <Typography variant="body2">
          * When you contact us. The legal basis for such processing is the GDPR
          art. 6(1)(b) and/or (f). The legitimate interest under (f) is for us
          to be able to respond to your inquiry.
        </Typography>
      </Box>
      <Box py={1}>
        <Typography gutterBottom variant="subtitle1">
          3. USE OF PERSONAL DATA
        </Typography>
        <Typography variant="body2">
          We will use personal information only in ways that are compatible with
          the purposes for which it was collected or subsequently authorised by
          you. DHI will take reasonable steps to ensure that personal
          information is relevant to its intended use, accurate, complete, and
          current.
        </Typography>
        <Typography variant="body2">
          Please note, that we will only use your personal data to send
          marketing material if you have given your explicit consent, unless
          legislation allows us to contact you without your prior consent.
        </Typography>
        <Typography variant="body2">
          DHI keeps statistics about which areas of the site our users visit.
          This information is used to improve the website. We do use data about
          how our users navigate, to better understand how our users use our
          websites and from that we try to improve the user experience.
          Furthermore, we collect information about what our users, as a unit,
          prefer. This information is also used to improve the website. We do
          not sell or otherwise disclose information about how our users
          navigate and use our website.
        </Typography>
      </Box>
      <Box py={1}>
        <Typography gutterBottom variant="subtitle1">
          4. SHARING OF PERSONAL DATA
        </Typography>
        <Typography variant="body2">
          We do not transfer your personal data to any third parties, except for
          what is described in this section, without your consent.
        </Typography>
        <Typography variant="body2">
          Your personal data may be disclosed to partners of DHI (providers who
          deliver services on behalf of DHI), for example IT service providers,
          and in relation to sending out newsletters. These partners only
          process the personal data on behalf of DHI and in accordance with
          DHI’s instructions. Furthermore, your personal data may be shared with
          business partners, e.g. freight companies, for the delivery of goods
          you buy in our webshop.
        </Typography>
        <Typography variant="body2">
          Your personal data may also be shared within the DHI group with all
          DHI affiliated companies. A list of all affiliated companies may be
          found on the following link:{' '}
          <Link
            href="https://www.dhigroup.com/privacy/sharing-of-personal-data#companies"
            variant="body2"
            className={classes.link}
          >
            https://www.dhigroup.com/privacy/sharing-of-personal-data#companies
          </Link>
        </Typography>
        <Typography variant="body2">
          Under specific circumstances and with reference to legislation, it
          might be necessary to transfer information to public authorities or
          the police. For example, information may be disclosed to the police in
          case of suspicion of credit card fraud.
        </Typography>
        <Typography variant="body2">
          In the case of a re-organization, full or partial sale of the company,
          any disclosure in such connection will be in accordance with current
          legislation for the processing of personal data.
        </Typography>
        <Typography variant="body2">
          If your personal data are transferred to data controllers or data
          processors, which are located in countries outside the EU/EEA not
          ensuring an adequate level of data protection, such transfers will be
          adequately safeguarded by DHI, e.g. via the EU Commission’s Standard
          Contractual Clauses. Please contact us if you wish further
          information.
        </Typography>
      </Box>
      <Box py={1}>
        <Typography gutterBottom variant="subtitle1">
          5. DELETION OF PERSONAL DATA
        </Typography>
        <Typography variant="body2">
          We will delete your personal data when we no longer need to process
          them in relation to one or more of the purposes set out above.
          However, the data may be processed and stored for a longer period in
          anonymized form.
        </Typography>
        <Typography variant="body2">
          We take appropriate measures to ensure that we process and store your
          personal data based on:
        </Typography>
        <Typography variant="body2">
          * as a minimum for the time period in which we deliver a service to
          you,
        </Typography>
        <Typography variant="body2">
          * in accordance with law, contract, or our legal obligations,
        </Typography>
        <Typography variant="body2">
          * or as long as the data are necessary in order for the purposes for
          which they are collected, or longer if it is required by contract,
          applicable law, or for statistical purposes governed by appropriate
          security measures.
        </Typography>
      </Box>
      <Box py={1}>
        <Typography gutterBottom variant="subtitle1">
          6. COOKIES
        </Typography>
        <Typography variant="body2">
          We use cookies on our website. You can read more about the use of
          cookies in our Cookie Policy, which you can find on the following
          link:
          <Link
            href="https://www.dhigroup.com/cookie-page"
            className={classes.link}
          >
            https://www.dhigroup.com/cookie-page
          </Link>
        </Typography>
      </Box>
      <Box py={1}>
        <Typography gutterBottom variant="subtitle1">
          7. SECURITY
        </Typography>
        <Typography variant="body2">
          We have implemented security measures to ensure that our internal
          procedures meet our high security policy standards. For example, we
          use encryption. Further, we strive to ensure the ongoing
          confidentiality, integrity, availability and resilience when
          processing your personal data. In the event of physical or technical
          incidents, we make every effort to restore the availability and access
          to your personal data in a timely manner. We also have processes for
          assessing and evaluating the effectiveness in order to ensure that the
          security level is sufficient.
        </Typography>
      </Box>
      <Box py={1}>
        <Typography gutterBottom variant="subtitle1">
          8. YOUR RIGHTS
        </Typography>
        <Typography variant="body2">
          You are at any time entitled to be informed of the personal data about
          you that we process, but with certain legislative exceptions. You also
          have the right to object to the collection and further processing of
          your personal data including profiling/automated decision-making.
          Furthermore, you have the right to have your personal data rectified,
          erased or blocked according to the rules. Moreover, you have the right
          to receive information about you that you have provided to us, and the
          right to have this information transmitted to another data controller
          (data portability).
        </Typography>
      </Box>
      <Box py={1}>
        <Typography gutterBottom variant="subtitle1">
          9. WITHDRAWAL OF CONSENT
        </Typography>
        <Typography variant="body2">
          You may, at any time, withdraw any consent you have given and we will
          delete your personal data, unless we can continue the processing based
          on another purpose. If you wish to withdraw your consent, please
          contact us at
          <Link href="info@dhigroup.com" className={classes.link}>
            info@dhigroup.com
          </Link>
          or +45 4516 9200.
        </Typography>
      </Box>
      <Box py={1}>
        <Typography gutterBottom variant="subtitle1">
          10. LINKS TO OTHER WEBSITES ETC.
        </Typography>
        <Typography variant="body2">
          Our website may contain links to other websites or to integrated
          sites. We are not responsible for the contents of the websites of
          other companies or for the practices of such companies regarding the
          collection of personal data. When you visit other websites, you should
          read the owners' policies on the protection of personal data and other
          relevant policies.
        </Typography>
      </Box>
      <Box py={1}>
        <Typography gutterBottom variant="subtitle1">
          11. CHANGES TO OUR PRIVACY POLICY
        </Typography>
        <Typography variant="body2">
          We reserve the right to change this privacy policy based on material
          changes in legislation, new technological solutions, new or improved
          features, or to improve our websites.
        </Typography>
      </Box>
      <Box py={1}>
        <Typography gutterBottom variant="subtitle1">
          12. AMENDMENT OF DATA ETC.
        </Typography>
        <Typography variant="body2">
          If you want us to update, amend or delete the personal data that we
          have recorded about you, or if you wish to get access to the data
          being processed about you, or if you have any questions concerning the
          above guidelines, you may contact us at{' '}
          <Link href="info@dhigroup.com" className={classes.link}>
            info@dhigroup.com
          </Link>{' '}
          or +45 4516 9200. You may also write to us at the following
          address:DHI, Agern Allé 5, 2970 Hørsholm, Denmark
        </Typography>
      </Box>
      <Box py={1}>
        <Typography gutterBottom variant="subtitle1">
          13. COMPLAINTS
        </Typography>
        <Typography variant="body2">
          If you wish to appeal against the processing of your personal data,
          please contact us by email, telephone or letter as indicated above.
          You may also contact the Data Protection Agency, Borgergade 28, 5.,
          1300 Copenhagen K, Denmark.
        </Typography>
      </Box>
    </Box>
  );
};

export default withStyles(styles, { withTheme: true })(Privacy);
