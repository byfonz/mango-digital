import { defineField, defineType } from "sanity";

export const badge = defineType({
    name: 'badge',
    title: 'Badge',
    type: 'object',
    fields:[
        //Label
        defineField({
            name: 'label',
            title: 'Label',
            type: 'string'
        })
    ]
})