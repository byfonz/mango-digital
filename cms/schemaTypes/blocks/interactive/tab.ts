import { defineField, defineType } from "sanity";

export const tabBlock = defineType({
    name: 'tabBlock',
    title: 'Tab Block',
    type: 'object',
    fields: [
        //Items
        defineField({
            name: 'items',
            title: 'Tab Items',
            type: 'array',
            of: [{ type: 'tabItem' }]
        })
    ]
})