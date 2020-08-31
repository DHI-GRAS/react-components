import * as React from 'react';
declare type DynamicFormProps = {
    disableButtonOnLoad: boolean;
    fields: Array<object>;
    validationSchema: any;
    onSubmitForm: Function;
    title: string;
};
declare const DynamicForm: React.FC<DynamicFormProps>;
export default DynamicForm;
