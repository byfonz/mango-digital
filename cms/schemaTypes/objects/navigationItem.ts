import { defineField, defineType } from "sanity";

export const navigationItem = defineType({
    name: 'navigationItem',
    title: 'Navigation Item',
    type: 'object',
    fields: [
        //Label
        defineField({
            name: 'label',
            title: 'Label',
            type: 'string',
        }),
        //Icon
        defineField({
            name: 'icon',
            title: 'Icon',
            type: 'string'
        }),
        //Link
        defineField({
            name: 'link',
            title: 'Link',
            type: 'link'
        }),
        //DropDown Item
        defineField({
            name: 'children',
            title: 'Dropdown Menu',
            type: 'array',
            of: [{ type: 'navigationItem' }]
        })
    ]
})