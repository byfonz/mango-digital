import {defineField, defineType} from 'sanity'

export const proposalType = defineType({
  name: 'proposal',
  title: 'Proposals',
  type: 'document',
  fields: [
    //Client Name
    defineField({
      name: 'title',
      title: 'Client Name',
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
          type: 'string',
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
      of: [{ type: 'section' }],
    }),
  ],
})
