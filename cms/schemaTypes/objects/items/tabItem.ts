import { defineField, defineType } from "sanity";
import { nestedBlocks } from "../../blocks/content/nestedBlocks";

export const tabItem = defineType({
    name: 'tabItem',
    title: 'Tab Item',
    type: 'object',
    fields: [
        //Title
        defineField({
            name: 'title',
            title: 'Tab Title',
            type: 'string'
        }),
        //Tab Content
        defineField({
            name: 'content',
            title: 'Tab Content',
            type: 'array',
            of: nestedBlocks,
        })
    ]
})