import { defineField, defineType } from "sanity";

export const timelineBlock = defineType({
    name: 'timelineBlock',
    title: 'Timeline Block',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Timeline Title',
            type: 'string',
        }),
        defineField({
            name: 'items',
            title: 'Timeline Items',
            type: 'array',
            of: [{ type: 'timelineItem' }]
        })
    ]
})