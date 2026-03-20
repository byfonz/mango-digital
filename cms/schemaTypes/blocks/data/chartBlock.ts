import { defineType, defineField } from "sanity";

export const chartBlock =  defineType({
    name: 'chartBlock',
    type: 'object',
    fields:[
        defineField({
            name: 'title',
            type: 'string'
        }),
        defineField({
            name: '',
            type: ''
        })
    ]
})