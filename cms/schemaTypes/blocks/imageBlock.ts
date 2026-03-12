import { defineField, defineType } from "sanity";

export const imageBlock = defineType({
    name: 'imageBlock',
    title: 'Image Block',
    type: 'object',
    fields: [
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: { hotspot: true },
            fields: [
                {
                    name: 'alt',
                    title: 'Alt Title',
                    type: 'string'
                }
            ]
        }),
        defineField({
            name: 'caption',
            title: 'Image Caption',
            type: 'string'
        })
    ],
})