import * as React from 'react';
declare type SliderProps = {
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
};
declare const Slider: React.FC<SliderProps>;
export default Slider;
