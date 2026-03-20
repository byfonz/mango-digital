import { defineType, defineField } from "sanity";

export const formField = defineType({
    name: 'formField',
    title: 'Form Field',
    type: 'object',
    fields:[
        //Name
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
        }),
        //Placeholder
        defineField({
            name: 'placeholder',
            title: 'Placeholder',
            type: 'string',
        }),
        //Type
        defineField({
            name: 'type',
            title: 'Type',
            type: 'string',
            options:{
                list:[
                    'text',
                    'email',
                    'textarea',
                    'select',
                    'checkbox'
                ]
            }
        }),
        //Options
        defineField({
            name: 'options',
            title: 'Options',
            type: 'array',
            of: [{ type: 'string' }],
            hidden: ({ parent }) => parent?.type !== 'select',
        }),
        //Required Field
        defineField({
            name: 'required',
            title: 'Required Field?',
            type: 'boolean',
            initialValue: false,
        })
    ]
})