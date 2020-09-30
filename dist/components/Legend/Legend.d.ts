import * as React from 'react';
export declare type LegendProps = {
    src: string;
    /**
     * *Only relevant when `range` is present. Represents the amount of ticks distributed between min/max values(including them).
     */
    length?: number | undefined;
    /**
     * Min/Max range for the Legend ticks.
     */
    range?: number[] | string[] | undefined;
    /**
     * Append a unit at the end of the values. (%, °C, £, $)
     */
    unit?: string | undefined;
};
declare const Legend: React.FC<LegendProps>;
export default Legend;
