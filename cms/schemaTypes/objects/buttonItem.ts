import { defineField, defineType } from "sanity";

export const buttonItem = defineType({
    name: 'buttonItem',
    title: 'Button Item',
    type: 'object',
    fields: [
        defineField({
            name: 'label',
            title: 'Button Title',
            type: 'string',
        }),
        defineField({
            name: 'href',
            title: 'Button Link',
            type: 'url',
        }),
        defineField({
            name: 'variant',
            title: 'Button Style',
            type: 'string',
            options: {
                list: [
                    'primary',
                    'outline',
                    'icon'
                ]
            }
        }),
    ]
})