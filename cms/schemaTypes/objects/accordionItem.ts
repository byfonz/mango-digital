import { defineField, defineType } from "sanity";

export const accordionItem = defineType({
    name: 'accordionItem',
    title: 'Accordion Item',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Accordion Title',
            type: 'string',
        }),
        defineField({
            name: 'content',
            title: 'Accordion Content',
            type: 'array',
            of: [{ type: 'block' }]
        })
    ]
})