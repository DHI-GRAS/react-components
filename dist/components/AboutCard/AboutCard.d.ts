import * as React from 'react';
export declare type AboutCardProps = {
    title: string;
    description?: string;
    descriptionTitle?: string;
    children?: React.ReactNode | undefined;
};
declare const AboutCard: React.FC<AboutCardProps>;
export default AboutCard;
