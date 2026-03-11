import { defineField } from "sanity";

export const textBlock = defineField({
    name: 'textBlock',
    title: 'Text Block',
    type: 'object',
    fields:[
        //Title
        {
            name: 'title',
            title: 'Section Title',
            type: 'string'
        },
        //Content
        {
            name: 'content',
            title: 'Section Content',
            type: 'array',
            of: [{ type: 'block' }]
        }
    ]
})