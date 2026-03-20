import {defineField, defineType} from 'sanity'

export const meta = defineType({
  name: 'meta',
  type: 'object',
  fields: [
    //Type
    defineField({
      name: 'type',
      type: 'string',
      options: {
        list:[
          {
            title: 'Blog',
            value: 'blog',
          },
          {
            title: 'Documento',
            value: 'document',
          },
          {
            title: 'Cotización',
            value: 'quotation',
          }
        ]
      }
    }),
    //Invoice Number
    defineField({
      name: 'invoiceNumber',
      title: 'Número de Cotización',
      type: 'string',
      hidden: ({ parent }) => parent?.type !== 'quotation' 
    }),
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
})
