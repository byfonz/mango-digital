import { defineType, defineField } from "sanity";

export const textBlock = defineType({
    name: 'textBlock',
    title: 'Text Block',
    type: 'object',
    fields:[
        //Title
        defineField({
            name: 'title',
            title: 'Section Title',
            type: 'string'
        }),
        //Content
        defineField({
            name: 'content',
            title: 'Section Content',
            type: 'array',
            of: [{ type: 'block' }]
        }),
    ]
})