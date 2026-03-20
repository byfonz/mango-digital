import {defineField, defineType} from 'sanity'
import { blockTypes } from '../../arrays/blockTypes' 

export const project = defineType({
  name: 'project',
  title: 'Portafolio',
  type: 'document',
  fields: [
    //Project Titles
    defineField({
      name: 'title',
      title: 'Proyecto',
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
    //Case Study
    defineField({
      name: 'caseStudy',
      title: 'Caso de Estudio',
      type: 'array',
      of: blockTypes,
    }),
  ],
})
