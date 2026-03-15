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
        //SubHeading
        defineField({
            name: 'subheading',
            title: 'SubHeading',
            type: 'string',
        }),
        //Content
        defineField({
            name: 'body',
            title: 'Body',
            type: 'array',
            of: [{ type: 'block' }]
        }),
        //Cover Image
        defineField({
            name: 'coverImage',
            title: 'Cover Image',
            type: 'image',
            options: { hotspot: true }
        }),
        //Actions
        defineField({
            name: 'actions',
            title: 'Actions',
            type: 'array',
            of: [{ type: 'button' }]
        }),
        //Variants
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
    ],
})