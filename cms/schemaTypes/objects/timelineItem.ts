import { defineField, defineType } from "sanity";

export const timelineItem = defineType({
    name: 'timelineItem',
    title: 'Timeline Item',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Timeline Title',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'date',
            title: 'Timeline Date',
            type: 'date',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Timeline Description',
            type: 'array',
            of: [{ type: 'block' }]
        }),
        defineField({
            name: 'delivarables',
            title: 'Delivarables',
            type: 'array',
            of: [{ type: 'slideItem' }]
        })
    ]
})