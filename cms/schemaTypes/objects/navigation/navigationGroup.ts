import { defineField, defineType } from "sanity";

export const navigationGroup = defineType({
    name: 'navigationGroup',
    title: 'Navigation Group',
    type: 'object',
    fields: [
        //Title
        defineField({
            name: 'title',
            title: 'Section Title',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        //Items
        defineField({
            name: 'items',
            title: 'Navigation Items',
            type: 'array',
            of: [{ type: 'navigationChild' }]
        }),
    ]
})