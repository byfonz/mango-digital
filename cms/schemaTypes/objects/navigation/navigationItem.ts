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
            validation: (rule) => rule.required(),
        }),
        //Icon
        defineField({
            name: 'icon',
            title: 'Icon',
            type: 'string'
        }),
        //Badge
        defineField({
            name: 'badge',
            title: 'Badge',
            type: 'string'
        }),
        //Link
        defineField({
            name: 'link',
            title: 'Link',
            type: 'link',
        }),
        //DropDown Item
        defineField({
            name: 'dropdown',
            title: 'Dropdown Menu',
            type: 'array',
            of: [{ type: 'navigationChild' }],
        }),
    ]
})