import { defineField, defineType } from "sanity";

export const heroSection = defineType({
    name: 'heroSection',
    title: 'Hero Section',
    type: 'object',
    fields: [
        //Heading
        defineField({
            name: 'heading',
            title: 'Heading',
            type: 'string',
        }),
        defineField({
            name: 'subheading',
            title: 'SubHeading',
            type: 'string',
        }),
        defineField({
            name: 'body',
            title: 'Body',
            type: 'array',
            of: [{ type: 'block' }]
        }),
        defineField({
            name: 'coverImage',
            title: 'Cover Image',
            type: 'image',
            options: { hotspot: true }
        }),
        defineField({
            name: 'actions',
            title: 'Actions',
            type: 'array',
            of: [{ type: 'button' }]
        }),
        defineField({
            name: 'variant',
            title: 'Variant',
            type: 'string',
            options: {
                list: [
                    {
                        title: 'Blog',
                        value: 'blog'
                    },
                    {
                        title: 'Centered',
                        value: 'centered',
                    }
                ]
            }
        }),
    ]
})