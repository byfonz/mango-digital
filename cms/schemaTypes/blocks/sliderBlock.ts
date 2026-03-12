import { defineField } from "sanity";

export const sliderBlock = defineField({
    name: 'sliderBlock',
    title: 'Slider Block',
    type: 'array',
    of:[
        {
            name: 'title',
            title: 'Slider Title',
            type: 'string'
        },
        {
            name: 'description',
            title: 'Slider Description',
            type: 'string',
        },
        {
            name: 'image',
            title: 'Slider Image',
            type: 'image',
            options: { hotspot: true }
        }
    ]
})