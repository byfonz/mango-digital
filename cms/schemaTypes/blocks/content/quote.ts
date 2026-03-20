import {defineType, defineField} from 'sanity'

export const quoteBlock = defineType({
  name: 'quoteBlock',
  title: 'Quote Block',
  type: 'object',
  fields: [
    //Quote
    defineField({
      name: 'quote',
      title: 'Quote',
      type: 'string',
    }),
    //Author
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{type: 'author'}],
    }),
  ],
})
