import { defineType, defineField } from "sanity";

export const tableBlock = defineType({
    name: 'tableBlock',
    title: 'Table Block',
    type: 'object',
    fields: [
        //Table
        defineField({
            name: 'table',
            title: 'Table',
            type: 'table'
        })
    ]
})