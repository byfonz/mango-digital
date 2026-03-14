import {defineField, defineType} from 'sanity'

export const serviceSection = defineType({
  name: 'serviceSection',
  title: 'Service Section',
  type: 'object',
  fields: [
    //Heading
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),
    //SubHeading
    defineField({
      name: 'subheading',
      title: 'SubHeading',
      type: 'string',
    }),
    //Services
    defineField({
      name: 'services',
      title: 'Services',
      type: 'array',
      of: [
        {
          type: 'sliderBlock'
        },
        {
          type: 'accordionBlock'
        }
      ]
    }),
  ],
})
