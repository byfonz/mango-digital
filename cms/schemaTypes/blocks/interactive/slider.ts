import {defineField, defineType} from 'sanity'

export const sliderBlock = defineType({
  name: 'sliderBlock',
  title: 'Slider Block',
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
    //Slides
    defineField({
      name: 'items',
      title: 'Slides',
      type: 'array',
      of: [{type: 'slideItem'}],
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      slides: 'slides',
    },
    prepare({title, slides}) {
      return {
        title: title || 'Slider Block',
        slides: `${slides?.length || 0} slides`,
      }
    },
  },
})
