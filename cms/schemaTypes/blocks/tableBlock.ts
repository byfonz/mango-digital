import { defineType, defineField } from "sanity";

export const tableBlock = defineType({
    name: 'tableBlock',
    title: 'Table Block',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string'
        }),
        defineField({
            name: 'table',
            title: 'Table',
            type: 'table'
        })
    ]
})