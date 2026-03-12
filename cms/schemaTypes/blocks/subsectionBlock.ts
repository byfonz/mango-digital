import { defineType, defineField } from "sanity";
import { blockTypes } from ".";

export const subsectionBlock = defineType({
    name: 'subsectionBlock',
    title: 'SubSection Block',
    type: 'object',
    fields: [
        //Title
        defineField({
            name: 'title',
            title: 'SubSection Title',
            type: 'string',
        }),
        //Content
        defineField({
            name: 'content',
            title: 'SubSection Content',
            type: 'array',
            of: [{ type: 'block' }]
        }),
        //Blocks
        defineField({
            name: 'blocks',
            title: 'Blocks',
            type: 'array',
            of: blockTypes
        })
    ]
})