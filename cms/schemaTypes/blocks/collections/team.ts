import {defineField, defineType} from 'sanity'

export const teamBlock = defineType({
  name: 'teamBlock',
  type: 'object',
  fields: [
    //Members
    defineField({
      name: 'items',
      title: 'Members',
      type: 'array',
      of: [{type: 'teamMember'}],
    }),
  ],
})
