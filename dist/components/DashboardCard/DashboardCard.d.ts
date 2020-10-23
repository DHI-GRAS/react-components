import * as React from 'react';
export declare type DashboardCardProps = {
    children?: React.ReactNode | undefined;
    description?: string;
    disabled?: boolean;
    headerChildren?: React.ReactNode | undefined;
    style?: any;
    title: string;
};
declare const DashboardCard: React.FC<DashboardCardProps>;
export default DashboardCard;
