import { defineField } from "sanity";

export const tableBlock = defineField({
    name: 'tableBlock',
    title: 'Table Block',
    type: 'object',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'table',
            title: 'Table',
            type: 'table'
        }
    ]
})