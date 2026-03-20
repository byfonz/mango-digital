import { defineField, defineType } from "sanity";
import { nestedBlocks } from "../../blocks/content/nestedBlocks";

export const featureItem = defineType({
    name: 'featureItem',
    title: 'Feature Item',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Feature Title',
            type: 'string',
        }),
        defineField({
            name: 'content',
            title: 'Feature Content',
            type: 'array',
            of: nestedBlocks,
        }),
        defineField({
            name: 'icon',
            title: 'Feature Icon',
            type: 'image',
            options: { hotspot: true },
        }),
    ]
})