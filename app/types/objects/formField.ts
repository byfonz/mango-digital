export type FormField = {
    _key: string;
    name: string;
    placeholder: string;
    type: FormFieldType;
    options?: string;
    required: boolean;
}

export type FormFieldType = 
| 'text'
| 'email'
| 'textarea'
| 'select'
| 'checkbox'