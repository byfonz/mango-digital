import {defineField, defineType} from 'sanity'

export const statsBlock = defineType({
  name: 'statsBlock',
  type: 'object',
  fields: [
    //Content
    defineField({
      name: 'items',
      title: 'Stat Items',
      type: 'array',
      of: [{type: 'statItem'}],
    }),
  ],
})
