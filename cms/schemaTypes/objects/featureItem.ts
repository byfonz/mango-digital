import { defineField, defineType } from "sanity";

export const featureItem = defineType({
    name: 'featureItem',
    title: 'Feature Item',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Feature Title',
            type: 'string',
        }),
        defineField({
            name: 'content',
            title: 'Feature Content',
            type: 'text',
        }),
        defineField({
            name: 'icon',
            title: 'Feature Icon',
            type: 'image',
            options: { hotspot: true },
        }),
    ]
})