import {defineField, defineType} from 'sanity'
import {sectionTypes} from '../sections'

export const postType = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    //Title
    defineField({
      name: 'title',
      title: 'Title',
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
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: sectionTypes,
    }),
  ],
})
