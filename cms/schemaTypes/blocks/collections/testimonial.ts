import { defineField, defineType } from "sanity";

export const testimonialBlock = defineType({
    name: 'testimonialBlock',
    title: 'Testimonial Block',
    type: 'object',
    fields: [
        //Testimonials
        defineField({
            name: 'items',
            title: 'Testimonials',
            type: 'array',
            of: [{ type: 'testimonialItem' }]
        })
    ]
})