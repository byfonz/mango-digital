import {defineField, defineType} from 'sanity'
import { blockTypes } from '../../arrays/blockTypes'

export const presentation = defineType({
  name: 'presentation',
  title: 'Presentaciones',
  type: 'document',
  fields: [
    //Title
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    //Slug
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'project'},
      validation: (rule) => rule.required(),
    }),
    //Slides
    defineField({
      name: 'slides',
      title: 'Slides',
      type: 'array',
      of: blockTypes,
      validation: (rule) => rule.required(),
    }),
  ],
})