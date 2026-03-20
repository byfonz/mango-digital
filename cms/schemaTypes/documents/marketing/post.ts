import {defineField, defineType} from 'sanity'
import { blockTypes } from '../../arrays/blockTypes'

export const post = defineType({
  name: 'post',
  title: 'Publicaciones',
  type: 'document',
  fields: [
    //Title
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    //Slug
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
    }),
    //Cover Image
    defineField({
      name: 'coverImage',
      title: 'Portada',
      type: 'media'
    }),
    //Meta
    defineField({
      name: 'meta',
      title: 'Metadata',
      type: 'meta',
    }),
    //Blocks
    defineField({
      name: 'blocks',
      title: 'Contenido',
      type: 'array',
      of: blockTypes,
      validation: (rule) => rule.required(),
    }),
  ],
})
