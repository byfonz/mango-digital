import {defineField, defineType} from 'sanity'
import { textBlock } from '../blocks/textBlock'
import { tableBlock } from '../blocks/tableBlock'
import { imageBlock } from '../blocks/imageBlock'
import { subSectionBlock } from '../blocks/subsection'

export const sectionType = defineType({
  name: 'section',
  title: 'Section',
  type: 'object',
  fields: [
    //Section
    defineField({
      name: 'section',
      title: 'Section',
      type: 'string',
      options: {
        list: [
          {
            title: 'Introduction',
            value: 'hero',
          },
          {
            title: 'Executive Summary',
            value: 'summary',
          },
          {
            title: 'Project Context',
            value: 'context',
          },
          {
            title: 'Work Plan',
            value: 'workPlan',
          },
          {
            title: 'System Architecture',
            value: 'system',
          },
          {
            title: 'Strategy',
            value: 'strategy',
          },
          {
            title: 'Quotation',
            value: 'quotation',
          },
          {
            title: 'Terms & Conditions',
            value: 'conditions',
          },
          {
            title: 'Why Us?',
            value: 'whyUs',
          },
        ],
      },
    }),
    //Blocks
    defineField({
      name: 'blocks', 
      title: 'Blocks',
      type: 'array',
      of: [
        textBlock, 
        tableBlock, 
        imageBlock,
        subSectionBlock
      ],
    }),
  ],
})
