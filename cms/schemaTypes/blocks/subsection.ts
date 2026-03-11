import { defineField } from "sanity";
import { textBlock } from "./textBlock";
import { tableBlock } from "./tableBlock";
import { imageBlock } from "./imageBlock";

export const subSectionBlock = defineField({
    name: 'subsectionBlock',
    title: 'Sub-Section Block',
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
            of: [
                textBlock,
                tableBlock,
                imageBlock
            ]
        })
    ]
})