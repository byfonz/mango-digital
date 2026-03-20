import {defineField, defineType} from 'sanity'

export const collectionBlock = defineType({
  name: 'collectionBlock',
  title: 'Collection Block',
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
      options:{
        list:[
          {
            title: 'Grid',
            value: 'grid'
          },
          {
            title: 'List',
            value: 'list'
          },
          {
            title: 'Carousel',
            value: 'carousel'
          },
          {
            title: 'Masonry',
            value: 'masonry'
          },
        ]
      }
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
    //Posts
    defineField({
      name: 'items',
      title: 'Posts',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: 'post',
            },
            {
              type: 'project',
            },
          ],
        },
      ],
    }),
  ],
})
