import {defineField, defineType} from 'sanity'
import { nestedBlocks } from '../../blocks/content/nestedBlocks'

export const accordionItem = defineType({
  name: 'accordionItem',
  title: 'Accordion Item',
  type: 'object',
  fields: [
    //Title
    defineField({
      name: 'title',
      title: 'Accordion Title',
      type: 'string',
    }),
    //Accordion Content
    defineField({
      name: 'content',
      title: 'Accordion Content',
      type: 'array',
      of: nestedBlocks,
    }),
  ],
})
