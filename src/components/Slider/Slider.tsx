import * as React from 'react';
import { Slider as MSlider, Box, Grid, Typography } from '@material-ui/core';

type SliderProps = {
  /**
   * Default values of the slider in format `[min, max]` or `number`.
   */
  defaultValue: number[] | number;
  title?: string | undefined;
  min?: number | undefined;
  max?: number | undefined;
  step?: number | undefined;
  /**
   * Get the value while using the slider thumb.
   */
  getValue?: (val: number | number[]) => void;
  /**
   * Get the value once you release the slider thumb.
   */
  getValueCommitted?: (val: number | number[]) => void;
  /**
   * *Requires `title` prop. Counted in `rem` units.
   */
  sliderMarginLeft?: number | undefined;
  noNumbers?: boolean | undefined;
  /**
   * Append a unit at the end of the values. (%, /10, £, $)
   */
  unit?: string | undefined;
  height?: number | undefined;
};

const Slider: React.FC<SliderProps> = ({
  defaultValue = [0, 1],
  title,
  min = 0,
  max = 1,
  step = 0.01,
  getValue,
  getValueCommitted,
  sliderMarginLeft = 1,
  noNumbers = false,
  unit = '',
  height = 30,
}) => {
  const [value, setValue] = React.useState(defaultValue);

  const handleChange = (newValue) => {
    setValue(newValue);
    getValue && getValue(newValue);
  };

  return (
    <Grid
      container
      direction="row"
      alignItems="center"
      justify="center"
      wrap="nowrap"
      style={{ height: height }}
    >
      {title && (
        <Box>
          <Grid
            container
            alignItems="center"
            style={{
              height: '100%',
              marginRight: noNumbers ? '1rem' : '0rem',
            }}
          >
            <Typography variant="h5">{title}</Typography>
          </Grid>
        </Box>
      )}
      {!noNumbers && typeof value[0] === 'number' && (
        <Box style={{ marginLeft: title ? `${sliderMarginLeft}rem` : '0rem' }}>
          <Grid
            container
            alignItems="center"
            justify="center"
            style={{ height: '100%', width: '2rem' }}
          >
            <Typography variant="body2">{value[0] + unit}</Typography>
          </Grid>
        </Box>
      )}

      <MSlider
        style={{ margin: '0rem .6rem' }}
        value={value}
        min={min}
        step={step}
        max={max}
        scale={(x) => x / 10}
        onChange={(e, val) => handleChange(val)}
        onChangeCommitted={(e, val) =>
          getValueCommitted && getValueCommitted(val)
        }
        valueLabelDisplay="off"
      />
      {!noNumbers && (
        <Box>
          <Grid
            container
            alignItems="center"
            justify="center"
            style={{ height: '100%', width: '2rem' }}
          >
            <Typography variant="body2">
              {`${value[1] || value}${unit}`}
            </Typography>
          </Grid>
        </Box>
      )}
    </Grid>
  );
};

export default Slider;
