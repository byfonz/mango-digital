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
            name: 'items',
            title: 'Navigation Menu Items',
            type: 'array',
            of: [
                {
                    name: 'navItem',
                    title: 'Nav Item',
                    type: 'object',
                    fields: [
                        {
                            name: 'label',
                            title: 'Label',
                            type: 'string'
                        },
                        {
                            name: 'href',
                            title: 'Link',
                            type: 'url'
                        },
                        {
                            name: 'children',
                            title: 'Label',
                            type: 'array',
                            of: [
                                {
                                    type: 'object',
                                    fields: [
                                        {
                                            name: 'label',
                                            title: 'Label',
                                            type: 'string'
                                        },
                                        {
                                            name: 'href',
                                            title: 'Link',
                                            type: 'string'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }),
        defineField({
            name: 'description',
            title: 'Timeline Description',
            type: 'array',
            of: [{ type: 'block' }]
        })
    ]
})