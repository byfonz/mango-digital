import { defineField, defineType } from "sanity";

export const timelineItem = defineType({
    name: 'timelineItem',
    title: 'Timeline Item',
    type: 'object',
    fields: [
        //Title
        defineField({
            name: 'title',
            title: 'Timeline Title',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        //Start
        defineField({
            name: 'start',
            title: 'Inicio',
            type: 'date',
            validation: (rule) => rule.required(),
        }),
        //End
        defineField({
            name: 'end',
            title: 'Finalización',
            type: 'date',
            validation: (rule) => rule.required(),
        }),
        //Status
        defineField({
            name: 'status',
            type: 'string',
        }),
        //Description
        defineField({
            name: 'description',
            title: 'Timeline Description',
            type: 'array',
            of: [{ type: 'block' }]
        }),
        defineField({
            name: 'delivarables',
            title: 'Delivarables',
            type: 'array',
            of: [{ type: 'slideItem' }]
        })
    ]
})