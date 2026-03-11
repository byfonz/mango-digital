Review my **Sanity CMS Types** and help me create production ready solution for an agency clien portal that's reusable between (Proposals, Documents, Reports, Pages, etc.) and help me add the missing types that are required

## proposal-type.ts
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
        //Date
        {
          name: 'date',
          title: 'Date',
          type: 'date',
          validation: (rule) => rule.required(),
        },
        //Industry
        {
          name: 'industry',
          title: 'Industry',
          type: 'string',
          validation: (rule) => rule.required(),
        },
        //Location
        {
          name: 'location',
          title: 'Location',
          type: 'string',
        },
        //Tags
        {
          name: 'tags',
          title: 'Tags',
          type: 'array',
          of: [{type: 'string'}],
          options: {layout: 'tags'},
        },
      ],
    }),
    //Sections
    defineField({
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [{type: 'section'}],
    }),
  ],
})


## section-type.ts
export const sectionType = defineType({
  name: 'section',
  title: 'Section',
  type: 'object',
  fields: [
    defineField({
      name: 'tab',
      title: 'Tabs',
      type: 'string',
      options: {
        list: [
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
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'content', 
      title: 'Content',
      type: 'array',
      of: [
        textField, 
        tableField, 
        imageField,
        subSectionField
      ],
    }),
  ],
})


## subsection-type.ts
export const subSectionField = defineField({
    name: 'subsection',
    title: 'SubSection',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'SubSection Title',
            type: 'string',
        }),
        defineField({
            name: 'content',
            title: 'SubSection Content',
            type: 'array',
            of: [{ type: 'block' }]
        }),
        defineField({
            name: 'components',
            title: 'Components',
            type: 'array',
            of: [
                textField,
                tableField
            ]
        })
    ]
})

## text-field.ts
export const textField = defineField({
    name: 'text-block',
    title: 'Text Block',
    type: 'object',
    fields:[
        {
            name: 'title',
            title: 'Section Title',
            type: 'string'
        },
        {
            name: 'content',
            title: 'Section Content',
            type: 'array',
            of: [{ type: 'block' }]
        }
    ]
})

## table-field.ts
export const tableField = defineField({
    name: 'table',
    title: 'Table Field',
    type: 'object',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'table',
            title: 'Table',
            type: 'table'
        }
    ]
})


## image-field.ts
export const imageField = defineField({
    name: 'imageField',
    title: 'Image Field',
    type: 'array',
    of: [{ type: 'image'}],
})