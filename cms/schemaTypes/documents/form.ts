import {defineField, defineType} from 'sanity';

export const form = defineType({
    name: 'form',
    title: 'Form',
    type: 'object',
    fields: [
        //Title
        defineField({
            name: 'title',
            title: 'Form Title',
            type: 'string',
        }),
    ]
})