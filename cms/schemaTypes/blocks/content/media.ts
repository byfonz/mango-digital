import {defineType, defineField} from 'sanity'

export const mediaBlock = defineType({
  name: 'mediaBlock',
  type: 'object',
  fields: [
    //Media
    defineField({
      name: 'media',
      type: 'media',
    }),
  ],
})
