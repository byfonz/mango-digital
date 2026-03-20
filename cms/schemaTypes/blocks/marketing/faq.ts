import {defineField, defineType} from 'sanity'

export const faqBlock = defineType({
  name: 'faqBlock',
  type: 'object',
  fields: [
    //Anchor
    defineField({
      name: 'anchor',
      title: 'Anchor',
      type: 'string',
    }),
    //Variant
    defineField({
      name: 'variant',
      title: 'Variant',
      type: 'string',
    }),
    //Label
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
    }),
    //Title
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    //Content
    defineField({
      name: 'content',
      title: 'Section Content',
      type: 'array',
      of: [{type: 'block'}],
    }),
    //Items
    defineField({
      name: 'items',
      title: 'Frecuently Asked Questions',
      type: 'array',
      of: [{type: 'faqItem'}],
    }),
  ],
})
