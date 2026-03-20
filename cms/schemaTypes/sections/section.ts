import { defineField, defineType } from "sanity";
import { sectionTypes } from "../arrays/sectionTypes";
import { blockTypes } from "../arrays/blockTypes";

export const section = defineType({
    name: 'section',
    title: 'Sections',
    type: 'object',
    fields:[
        //Section Type
        defineField({
            name: 'type',
            title: 'Section Type',
            type: 'string',
            options:{
                list: sectionTypes,
            },
            validation: (rule) => rule.required(),
        }),
        //Variant
        defineField({
            name: 'variant',
            title: 'Variant',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        //Content
        defineField({
            name: 'content',
            title: 'Section Content',
            type: 'array',
            of: blockTypes,
            validation: (rule) => rule.required(),
        }),
    ],
    
})