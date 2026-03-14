import { defineField, defineType } from "sanity";

export const link = defineType({
    name: 'link',
    title: 'Link',
    type: 'object',
    fields: [
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