import { defineType, defineField } from "sanity";

export const slideItem = defineType({
    name: 'slideItem',
    title: 'Slide',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Slide Title',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Slide Description',
            type: 'array',
            of: [{ type: 'block' }],
        }),
        defineField({
            name: 'image',
            title: 'Slide Image',
            type: 'image',
            options: { hotspot: true },
            fields: [
                defineField({
                    name: 'alt',
                    title: 'Alt Text',
                    type: 'string'
                })
            ]
        })
    ],
    preview: {
        select: {
            title: 'title',
            media: 'image',
        }
    }
})