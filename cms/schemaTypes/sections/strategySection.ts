import { defineField, defineType } from "sanity";
import { blockTypes } from "../blocks";

export const strategySection = defineType({
    name: 'strategySection',
    title: 'Strategy Section',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string'
        }),
        defineField({
            name: 'blocks',
            title: 'Blocks',
            type: 'array',
            of: blockTypes
        }),
    ]
})