import { defineField, defineType } from "sanity";

export const teamSection = defineType({
    name: 'teamSection',
    title: 'Team Section',
    type: 'object',
    fields: [
        //Heading
        defineField({
            name: 'heading',
            title: 'Heading',
            type: 'string'
        }),
        //SubHeading
        defineField({
            name: 'subheading',
            title: 'SubHeading',
            type: 'string',
        }),
        //Content
        defineField({
            name: 'body',
            title: 'Body',
            type: 'array',
            of: [{ type: 'block' }]
        }),
        //Members
        defineField({
            name: 'members',
            title: 'Members',
            type: 'array',
            of: [{ type: 'teamMember' }]
        })
    ]
})