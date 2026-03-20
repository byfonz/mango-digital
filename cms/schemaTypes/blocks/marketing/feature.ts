import {defineField, defineType} from 'sanity'

export const featureBlock = defineType({
  name: 'featureBlock',
  title: 'Feature Block',
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
      options: {
        list: [
          {
            title: 'Grid',
            value: 'grid',
          },
          {
            title: 'List',
            value: 'list',
          },
          {
            title: 'Cards',
            value: 'cards',
          },
          {
            title: 'Bento',
            value: 'bento',
          },
        ],
      },
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
      title: 'Features',
      type: 'array',
      of: [{type: 'featureItem'}],
    }),
  ],
})
