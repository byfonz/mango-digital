import {defineField, defineType} from 'sanity'
import {sectionTypes} from '../sections'

export const pageType = defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    //Title
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
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
      title: 'Sections',
      type: 'array',
      of: sectionTypes,
    }),
    //SEO
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    })
  ],
})
