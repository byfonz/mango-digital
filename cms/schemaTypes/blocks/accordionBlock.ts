import { defineField, defineType } from "sanity";

export const accordionBlock = defineType({
    name: 'accordionBlock',
    title: 'Accordion Block',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Accordion Title',
            type: 'string',
        }),
        defineField({
            name: 'items',
            title: 'Accordion Items',
            type: 'array',
            of: [{ type: 'accordionItem' }]
        })
    ]
})