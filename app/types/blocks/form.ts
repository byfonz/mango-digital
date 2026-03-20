import { FormField } from "../objects/formField";

export type FormBlock = {
     _key: string;
    _type: "formBlock";
    type: FormType;
    items: FormField[];
}

export type FormType = 
| 'contact'
| 'newsletter'
| 'lead'
| 'support';