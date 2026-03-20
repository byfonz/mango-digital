import {defineField, defineType} from 'sanity'

export const page = defineType({
  name: 'page',
  title: 'Páginas',
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
      options: {source: 'title'},
      validation: (rule) => rule.required(),
    }),
    //Sections
    defineField({
      name: 'sections',
      title: 'Secciones',
      type: 'array',
      of: [{ type: 'section' }],
      validation: (rule) => rule.required(),
    }),
    //SEO
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    })
  ],
})
