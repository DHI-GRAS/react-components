declare type DynamicFormProps = {
    disableButtonOnLoad: boolean;
    fields: Array<object>;
    validationSchema: any;
    onSubmitForm: Function;
    title: string;
};
declare const DynamicForm: {
    ({ disableButtonOnLoad, fields, validationSchema, onSubmitForm, title, }: DynamicFormProps): JSX.Element;
    displayName: string;
    __docgenInfo: {
        description: string;
        displayName: string;
        props: {
            disableButtonOnLoad: {
                defaultValue: {
                    value: boolean;
                };
                description: string;
                name: string;
                required: boolean;
                type: {
                    name: string;
                };
            };
            fields: {
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
            validationSchema: {
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
            onSubmitForm: {
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
        };
    };
};
export default DynamicForm;
