import {defineField, defineType} from 'sanity'

export const service = defineType({
  name: 'service',
  title: 'Servicios',
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
    //Description
    defineField({
        name: 'description',
        title: 'Descripción',
        type: 'array',
        of: [{ type: 'block' }]
    }),
    //Features
    defineField({
      name: 'features',
      title: 'Entregables',
      type: 'array',
      of: [{ type: 'featureBlock' }],
      validation: (rule) => rule.required(),
    }),
  ],
})