import { defineField, defineType } from "sanity";

export const statItem = defineType({
    name: 'statItem',
    title: 'Stat Item',
    type: 'object',
    fields:[
        //Stat
        defineField({
            name: 'stat',
            title: 'Stat',
            type: 'number'
        }),
        //Label
        defineField({
            name: 'label',
            title: 'Label',
            type: 'string'
        }),
        //Description
        defineField({
            name: 'desription',
            title: 'Description',
            type: 'text'
        }),
    ]
})