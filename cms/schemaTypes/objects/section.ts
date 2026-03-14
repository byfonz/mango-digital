import {defineField, defineType} from 'sanity'
import { blockTypes } from '../blocks'
import { SECTION_TYPE_LABELS } from '../../constants/sectionTypes'
import { sectionTypes } from '../sections'

export const sectionType = defineType({
  name: 'section',
  title: 'Section',
  type: 'object',
  fields: [
    //Blocks
    defineField({
      name: 'sections', 
      title: 'Sections',
      type: 'array',
      of: sectionTypes,
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
