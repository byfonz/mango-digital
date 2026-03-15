import {defineField, defineType} from 'sanity'

export const media = defineType({
  name: 'media',
  title: 'Media',
  type: 'object',
  fields: [
    //Image
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true }
    }),
    //Video
    defineField({
      name: 'video',
      title: 'Video',
      type: 'url',
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
