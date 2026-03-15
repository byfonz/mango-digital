import {defineField, defineType} from 'sanity'
import {sectionTypes} from '../sections'
import { SECTION_TYPE_LABELS } from '../../constants/sectionTypes'

export const proposalType = defineType({
  name: 'proposal',
  title: 'Proposals',
  type: 'document',
  fields: [
    //Project
    defineField({
      name: 'project',
      title: 'Project Name',
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
    //Meta
    defineField({
      name: 'meta',
      title: 'Meta',
      type: 'object',
      fields: [
        //Author
        defineField({
          name: 'author',
          title: 'Author',
          type: 'reference',
          to: [{type: 'author'}],
        }),
        //Client
        defineField({
          name: 'client',
          title: 'Client',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
        //Date
        defineField({
          name: 'date',
          title: 'Date',
          type: 'date',
          validation: (rule) => rule.required(),
        }),
        //Tags
        defineField({
          name: 'tags',
          title: 'Tags',
          type: 'array',
          of: [{type: 'string'}],
          options: {layout: 'tags'},
        }),
      ],
    }),
    //Sections
    defineField({
      name: 'section',
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
