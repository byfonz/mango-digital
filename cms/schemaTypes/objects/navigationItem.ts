import { defineField, defineType } from "sanity";

export const navigationItem = defineType({
    name: 'navigationItem',
    title: 'Navigation Item',
    type: 'object',
    fields: [
        defineField({
            name: 'label',
            type: 'string',
        }),
        defineField({
            name: 'href',
            type: 'string'
        }),
        defineField({
            name: 'target',
            type: 'string',
            options:{
                list: [
                    {
                        title: 'Same Tab',
                        value: '_self'
                    },
                    {
                        title: 'New Tab',
                        value: '_blank'
                    }
                ]
            }
        })
    ]
})