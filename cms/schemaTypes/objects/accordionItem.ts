import { defineField, defineType } from "sanity";
import { textBlock } from "../blocks/textBlock";
import { imageBlock } from "../blocks/imageBlock";

export const accordionItem = defineType({
    name: 'accordionItem',
    title: 'Accordion Item',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Accordion Title',
            type: 'string',
        }),
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