import { defineField, defineType } from "sanity";

export const navigationType = defineType({
    name: 'navigation',
    title: 'Navigation Menu',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Menu Title',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {source: 'title'},
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'logo',
            title: 'Menu Logo',
            type: 'image',
            options: { hotspot: true }
        }),
        defineField({
            name: 'items',
            title: 'Navigation Menu Items',
            type: 'array',
            of: [{ type: 'navigationItem' }]
        }),
    ]
})