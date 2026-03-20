import {defineType, defineField} from 'sanity'

export const formBlock = defineType({
  name: 'formBlock',
  title: 'Form Block',
  type: 'object',
  fields: [
    //Anchor
    defineField({
      name: 'anchor',
      title: 'Anchor',
      type: 'string',
    }),
    //Variant
    defineField({
      name: 'variant',
      title: 'Variant',
      type: 'string',
    }),
    //Label
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
    }),
    //Title
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    //Content
    defineField({
      name: 'content',
      title: 'Section Content',
      type: 'array',
      of: [{type: 'block'}],
    }),
    //Form Type
    defineField({
      name: 'type',
      title: 'Form Type',
      type: 'string',
      options: {
        list: [
          {
            title: 'Contact',
            value: 'contact',
          },
          {
            title: 'Newsletter',
            value: 'newsletter',
          },
          {
            title: 'Lead Capture',
            value: 'lead',
          },
          {
            title: 'Support',
            value: 'support',
          },
        ],
      },
    }),
    //Fields
    defineField({
      name: 'items',
      title: 'Form Fields',
      type: 'array',
      of: [{type: 'formField'}],
    }),
    //SumbitLabel
    defineField({
      name: 'submitLabel',
      title: 'Submit Label',
      type: 'string',
      initialValue: 'Submit',
    }),
  ],
})
