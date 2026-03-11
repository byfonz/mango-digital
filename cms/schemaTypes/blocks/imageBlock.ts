import { defineField } from "sanity";

export const imageBlock = defineField({
    name: 'imageBlock',
    title: 'Image Block',
    type: 'object',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: { hotspot: true }
        },
        {
            name: 'caption',
            title: 'Image Caption',
            type: 'string'
        }
    ],
})