import { defineField, defineType } from "sanity";

export const featureBlock = defineType({
    name: 'featureBlock',
    title: 'Feature Block',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Feature Title',
            type: 'string',
        }),
        defineField({
            name: 'items',
            title: 'Feature Items',
            type: 'array',
            of: [{ type: 'featureItem' }]
        })
    ]
})