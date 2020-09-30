import * as React from 'react';
export declare type LegendProps = {
    src: string;
    length?: number | undefined;
    range?: number[] | string[] | undefined;
    unit?: string | undefined;
};
declare const Legend: React.FC<LegendProps>;
export default Legend;
