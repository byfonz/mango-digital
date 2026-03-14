import { defineField, defineType } from "sanity";

export const gallerySection = defineType({
    name: 'gallerySection',
    title: 'Gallery Section',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string'
        }),
        defineField({
            name: 'images',
            title: 'Images',
            type: 'array',
            of: [{ type: 'image' }]
        }),
        defineField({
            name: 'variant',
            title: 'Variant',
            type: 'string',
            options: {
                list: [
                    {
                        title: 'Grid',
                        value: 'grid'
                    },
                    {
                        title: 'Masonry',
                        value: 'masonry'
                    },
                    {
                        title: 'Carousel',
                        value: 'carousel'
                    }
                ]
            }
        })
    ]
})