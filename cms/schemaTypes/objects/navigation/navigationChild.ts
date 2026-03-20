import { defineField, defineType } from "sanity";

export const navigationChild = defineType({
    name: 'navigationChild',
    type: 'object',
    fields:[
        defineField({
            name: 'label',
            title: 'Label',
            type: 'string',
            validation: (rule) => rule.required()
        }),
        //Icon
        defineField({
            name: 'icon',
            title: 'Icon',
            type: 'string',
        }),
        //Link
        defineField({
            name: 'link',
            title: 'Link',
            type: 'link',
            validation: (rule) => rule.required()
        })
    ]
})