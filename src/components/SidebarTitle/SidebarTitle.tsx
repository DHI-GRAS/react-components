import * as React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';

const containerStyle = {
  padding: 16,
};

const mainTitleStyle = {
  fontSize: 20,
  fontWeight: 500,
  // color: '#0b4566',
  //
};

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     container: {
//       padding: 16,
//     },
//     mainTitle: {
//       fontSize: 20,
//       fontWeight: 500,
//       color: '#0b4566',
//     },
//   })
// );

type SidebarTitleProps = {
  title: string;
  titleColor?: string;
  subTitle?: Array<string>;
  subTitleColor?: string;
  image?: string;
  imageWidth?: number;
  backgroundColor?: string;
  bottomBorderSize?: string | number;
  bottomBorderColor?: string;
};
const SidebarTitle: React.FC<SidebarTitleProps> = ({
  title = 'Current title',
  subTitle = [''],
  image,
  imageWidth = 38,
  backgroundColor = '#FFFFFF',
  titleColor = '#0b4566',
  subTitleColor = '#86a2b3',
  bottomBorderSize,
  bottomBorderColor,
}) => {
  // const classes = useStyles({} as StyledProps);
  return (
    <Box
      style={{
        backgroundColor,
        borderBottom: `${bottomBorderSize}px solid ${bottomBorderColor}`,
        ...containerStyle,
      }}
    >
      <Grid container spacing={0} justify="space-between">
        <Grid item xs={10}>
          <Typography
            style={{ color: titleColor, ...mainTitleStyle }}
            variant={'h2'}
          >
            {title}
          </Typography>
        </Grid>
        {image && (
          <Grid item>
            <img src={image} alt="DHI Logo" style={{ width: imageWidth }} />
          </Grid>
        )}
      </Grid>
      {(subTitle || subTitle.length > 0) && (
        <>
          {subTitle.map((text: string, index: number) => {
            return (
              <Typography
                key={`subtitle-${index}`}
                style={{ color: subTitleColor }}
                color="secondary"
                variant="h4"
              >
                {text}
              </Typography>
            );
          })}
        </>
      )}
    </Box>
  );
};

export default SidebarTitle;
