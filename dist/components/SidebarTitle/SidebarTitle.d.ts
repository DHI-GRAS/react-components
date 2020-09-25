import * as React from 'react';
declare type SidebarTitleProps = {
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
declare const SidebarTitle: React.FC<SidebarTitleProps>;
export default SidebarTitle;
