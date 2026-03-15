import {defineField, defineType} from 'sanity';

export const seo = defineType({
    name: 'seo',
    title: 'SEO Settings',
    type: 'object',
    fields: [
        //Title
        defineField({
            name: 'title',
            title: 'Page Title',
            type: 'string',
        }),
        //Description
        defineField({
            name: 'description',
            title: 'Meta Description',
            type: 'string',
        }),
        //Canonical URL
        defineField({
            name: 'canonical',
            title: 'Canonical URL',
            type: 'url',
        }),
        //OG Image
        defineField({
            name: 'ogImage',
            title: 'Open Graph Image',
            type: 'image',
            options: { hotspot: true }
        }),
        //Index
        defineField({
            name: 'noIndex',
            title: 'No Index',
            type: 'boolean',
        }),
    ]
})