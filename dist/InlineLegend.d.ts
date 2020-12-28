import { FC } from 'react';
export declare type LegendProps = {
    imageSrc?: string;
    length?: number;
    range: number[] | string[];
    unit?: string;
    colorRange?: string[];
};
declare const Legend: FC<LegendProps>;
export default Legend;
