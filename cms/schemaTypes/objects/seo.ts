import {defineField, defineType} from 'sanity';

export const seo = defineType({
    name: 'seo',
    title: 'Seo Settings',
    type: 'object',
    fields: [
        //Page Title
        defineField({
            name: 'title',
            title: 'Page Title',
            type: 'string',
        }),
        //Description
        defineField({
            name: 'description',
            title: 'Page Description',
            type: 'string',
        }),
        //Canonical URL
        defineField({
            name: 'canonical',
            title: 'Canonical URL',
            type: 'url',
        }),
        //Robots Txt
        //Open Graph
    ]
})