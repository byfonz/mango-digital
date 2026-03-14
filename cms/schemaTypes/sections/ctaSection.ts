import { defineField, defineType } from "sanity";

export const ctaSection = defineType({
    name: 'ctaSection',
    title: 'CTA Section',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string'
        }),
        defineField({
            name: 'description',
            title: 'Title',
            type: 'text'
        }),
        defineField({
            name: 'actions',
            title: 'Actions',
            type: 'array',
            of: [{ type: 'button' }]
        }),
    ]
})