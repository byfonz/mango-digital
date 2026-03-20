import {defineType, defineField} from 'sanity'

export const ctaBlock = defineType({
  name: 'ctaBlock',
  title: 'CTA Block',
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
    //Actions
    defineField({
      name: 'actions',
      title: 'Actions',
      type: 'array',
      of: [{type: 'button'}],
    }),
  ],
})
