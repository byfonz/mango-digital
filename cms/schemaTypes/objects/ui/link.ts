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
            },
            validation: (rule) => rule.required(),
        }),
        //Internal Page
        defineField({
            name: 'reference',
            title: 'Internal Page',
            type: 'reference',
            to: [{ type: 'page' }],
            hidden: ({ parent }) => parent?.type !== 'internal'
        }),
        //External URL
        defineField({
            name: 'url',
            title: 'External URL',
            type: 'url',
            hidden: ({ parent }) => parent?.type !== 'external'
        }),
        //Anchor
        defineField({
            name: 'anchor',
            title: 'Anchor',
            type: 'string',
            hidden: ({ parent }) => parent?.type !== 'internal'
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