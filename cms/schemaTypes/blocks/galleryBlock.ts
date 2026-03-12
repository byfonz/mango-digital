import { defineField, defineType } from "sanity";

export const galleryBlock = defineType({
    name: 'galleryBlock',
    title: 'Gallery Block',
    type: 'object',
    fields: [
        defineField({
            name: 'items',
            title: 'Gallery Items',
            type: 'array',
            of: [
                {
                    type: 'image',
                    options: { hotspot: true },
                    fields: [
                        {
                            name: 'alt',
                            title: 'Alt Title',
                            type: 'string'
                        },
                        {
                            name: 'caption',
                            title: 'Image Caption',
                            type: 'string'
                        }
                    ]
                },
            ]
        })
    ]
})