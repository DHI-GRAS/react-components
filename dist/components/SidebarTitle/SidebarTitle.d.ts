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
declare const SidebarTitle: {
    ({ title, subTitle, image, imageWidth, backgroundColor, titleColor, subTitleColor, bottomBorderSize, bottomBorderColor, }: SidebarTitleProps): JSX.Element;
    displayName: string;
    __docgenInfo: {
        description: string;
        displayName: string;
        props: {
            title: {
                defaultValue: {
                    value: string;
                };
                description: string;
                name: string;
                required: boolean;
                type: {
                    name: string;
                };
            };
            titleColor: {
                defaultValue: {
                    value: string;
                };
                description: string;
                name: string;
                required: boolean;
                type: {
                    name: string;
                };
            };
            subTitle: {
                defaultValue: {
                    value: string;
                };
                description: string;
                name: string;
                required: boolean;
                type: {
                    name: string;
                };
            };
            subTitleColor: {
                defaultValue: {
                    value: string;
                };
                description: string;
                name: string;
                required: boolean;
                type: {
                    name: string;
                };
            };
            image: {
                defaultValue: any;
                description: string;
                name: string;
                required: boolean;
                type: {
                    name: string;
                };
            };
            imageWidth: {
                defaultValue: {
                    value: number;
                };
                description: string;
                name: string;
                required: boolean;
                type: {
                    name: string;
                };
            };
            backgroundColor: {
                defaultValue: {
                    value: string;
                };
                description: string;
                name: string;
                required: boolean;
                type: {
                    name: string;
                };
            };
            bottomBorderSize: {
                defaultValue: any;
                description: string;
                name: string;
                required: boolean;
                type: {
                    name: string;
                };
            };
            bottomBorderColor: {
                defaultValue: any;
                description: string;
                name: string;
                required: boolean;
                type: {
                    name: string;
                };
            };
        };
    };
};
export default SidebarTitle;
