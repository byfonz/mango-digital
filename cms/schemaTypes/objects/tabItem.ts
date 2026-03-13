import { defineField, defineType } from "sanity";

export const tabItem = defineType({
    name: 'tabItem',
    title: 'Tab Item',
    type: 'object',
    fields: [
        defineField({
            name: 'content',
            title: 'Accordion Content',
            type: 'array',
            of: [
                {
                    type: 'textBlock'
                },
                {
                    type: 'imageBlock'
                },
                {
                    type: 'tableBlock'
                },
                {
                    type: 'sliderBlock'
                },
                {
                    type: 'featureBlock'
                }
            ]
        })
    ]
})