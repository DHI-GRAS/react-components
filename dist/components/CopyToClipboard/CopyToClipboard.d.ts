import * as React from 'react';
export declare type CopyToClipboardProps = {
    disabled?: boolean;
    helperText?: string;
    url?: boolean;
    message?: string;
};
export declare const mockCopy: VoidFunction;
declare const CopyToClipboard: React.FC<CopyToClipboardProps>;
export default CopyToClipboard;
