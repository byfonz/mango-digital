import { defineField, defineType } from "sanity";

export const button = defineType({
    name: 'button',
    title: 'Button',
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