import { defineField, defineType } from "sanity";

export const link = defineType({
    name: 'link',
    title: 'Link',
    type: 'object',
    fields: [
        //Type
        defineField({
            name: 'type',
            title: 'Type',
            type: 'string',
            options: {
                list: [
                    {
                        title: 'Internal',
                        value: 'internal'
                    },
                    {
                        title: 'External',
                        value: 'external'
                    },
                ]
            }
        }),
        //URL
        defineField({
            name: 'url',
            title: 'URL',
            type: 'url',
        }),
        //Anchor
        defineField({
            name: 'anchor',
            title: 'Anchor',
            type: 'string',
        }),
        //Target
        defineField({
            name: 'target',
            title: 'Target',
            type: 'string',
            options: {
                list: [
                    {
                        title: 'Same Tab',
                        value: '_self',
                    },
                    {
                        title: 'New Tab',
                        value: '_blank',
                    },
                ]
            },
            initialValue: '_self'
        })
    ]
})