import { defineType, defineField } from "sanity";

export const headingBlock = defineType({
    name: 'headingBlock',
    title: 'Heading Block',
    type: 'object',
    fields:[
        //Title
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string'
        }),
        //Subtitle
        defineField({
            name: 'subtitle',
            title: 'Subtitle',
            type: 'string'
        }),
        //Content
        defineField({
            name: 'content',
            title: 'Section Content',
            type: 'array',
            of: [{ type: 'block' }]
        }),
        //Cover Image
        defineField({
            name: 'coverImage',
            title: 'Cover Image',
            type: 'media',
        })
    ]
})