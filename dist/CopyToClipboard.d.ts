import { FC } from 'react';
export interface Props {
    disabled?: boolean;
    successLabel?: string;
    tooltipLabel?: string;
    toCopy?: string;
    afterCopy?: Function;
}
declare const CopyToClipboard: FC<Props>;
export default CopyToClipboard;
