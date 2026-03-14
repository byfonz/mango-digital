import {defineField, defineType} from 'sanity'
import { sectionTypes } from '../sections'

export const caseStudy = defineType({
  name: 'caseStudy',
  title: 'Case Study',
  type: 'document',
  fields: [
    //Project
    defineField({
      name: 'project',
      title: 'Project Name',
      type: 'string',
    }),
    //Slug
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'project'},
    }),
    //Sections
    defineField({
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: sectionTypes,
    }),
  ],
})
