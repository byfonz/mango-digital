import {defineField, defineType} from 'sanity'

export const galleryBlock = defineType({
  name: 'galleryBlock',
  type: 'object',
  fields: [
    //Variant
    defineField({
      name: 'variant',
      title: 'Variant',
      type: 'string',
    }),
    //Items
    defineField({
      name: 'items',
      title: 'Gallery Items',
      type: 'array',
      of: [{type: 'media'}],
    }),
  ],
})
