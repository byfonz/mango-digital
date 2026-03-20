import {defineField, defineType} from 'sanity'

export const media = defineType({
  name: 'media',
  title: 'Media',
  type: 'object',
  fields: [
    //Type
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          {
            title: 'Image',
            value: 'image'
          },
          {
            title: 'Video',
            value: 'video'
          },
        ]
      }
    }),
    //Image
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
      hidden: ({ parent }) => parent?.type !== 'image',
    }),
    //Video
    defineField({
      name: 'video',
      title: 'Video',
      type: 'url',
      hidden: ({ parent }) => parent?.type !== 'video',
    }),
    //Alt Text
    defineField({
      name: 'altText',
      title: 'Alt Text',
      type: 'string',
    }),
    //Caption
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'string',
    }),
  ],
})
