import { defineField, defineType } from "sanity";

export const teamMember = defineType({
    name: 'teamMember',
    title: 'Team Member',
    type: 'object',
    fields: [
        //Name
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string'
        }),
        //Role
        defineField({
            name: 'role',
            title: 'Role',
            type: 'string'
        }),
        //Avatar
        defineField({
            name: 'avatar',
            title: 'Avatar',
            type: 'image',
            options: { hotspot: true }
        }),
        //Bio
        defineField({
            name: 'bio',
            title: 'Bio',
            type: 'text',
        }),
    ]
})