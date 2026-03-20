import { defineField, defineType } from "sanity";

export const authorType = defineType({
    name: 'author',
    title: 'Author',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Author Name',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'role',
            title: 'Role',
            type: 'string',
        }),
        defineField({
            name: 'avatar',
            title: 'Avatar',
            type: 'image',
            options: { hotspot: true }
        })
    ]
})