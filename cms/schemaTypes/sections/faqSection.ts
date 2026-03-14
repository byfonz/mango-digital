import { defineField, defineType } from "sanity";

export const faqSection = defineType({
    name: 'faqSection',
    title: 'FAQ Section',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string'
        }),
        defineField({
            name: 'body',
            title: 'Body',
            type: 'array',
            of: [{ type: 'block' }]
        }),
        defineField({
            name: 'items',
            title: 'Items',
            type: 'array',
            of: [{ type: 'accordionItem' }]
        })
    ]
})