import {defineField, defineType} from 'sanity'
import { blockTypes } from '../blocks'
import { SECTION_TYPE_LABELS } from '../../constants/sectionTypes'

export const sectionType = defineType({
  name: 'section',
  title: 'Section',
  type: 'object',
  fields: [
    //Section
    defineField({
      name: 'type',
      title: 'Section Type',
      type: 'string',
      options: {
        list: [
          {
            title: 'Introduction',
            value: 'introduction',
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
      of: blockTypes,
    }),
  ],
  preview: {
    select: {
      type: 'type',
      blocks: 'blocks'
    },
    prepare({ type, blocks }) {
    return {
      title: SECTION_TYPE_LABELS[type] ?? "Section",
      subtitle: `${blocks?.length ?? 0} blocks`
    }
  }
  }
})
