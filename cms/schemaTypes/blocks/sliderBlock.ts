import { defineField, defineType } from "sanity";

export const sliderBlock = defineType({
    name: 'sliderBlock',
    title: 'Slider Block',
    type: 'object',
    fields:[
        defineField({
            name: 'title',
            title: 'Slider Title',
            type: 'string'
        }),
        defineField({
            name: 'slides',
            title: 'Slides',
            type: 'array',
            of: [{ type: 'slideItem' }],
            validation: (rule) => rule.required(),
        })
    ],
    preview: {
        select: {
            title: 'title',
            slides: 'slides',
        },
        prepare({ title, slides }) {
            return {
                title: title || 'Slider Block',
                slides: `${slides?.length || 0} slides`
            }
        }
    }
})