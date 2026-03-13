import { defineField, defineType } from "sanity";

export const tabBlock = defineType({
    name: 'tabBlock',
    title: 'Tab Block',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Tab Title',
            type: 'string',
        }),
        defineField({
            name: 'items',
            title: 'Tab Content',
            type: 'array',
            of: [{ type: 'tabItem' }]
        })
    ]
})