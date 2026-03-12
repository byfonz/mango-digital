You are a senior full-stack engineer and systems architect with deep experience in:
- Next.js (App Router) 16.1.6
- TypeScript
- Sanity CMS 5.14.1
- Component-driven architecture
- Scalable content rendering systems

Your goal is to help me refactor and complete a production-ready implementation for rendering dynamic proposal pages powered by Sanity CMS.

## Objective
Review my current implementation and help me design a clean, scalable, production-ready architecture for:

Sanity → GROQ → TypeScript types → React rendering system

The final solution should:
- follow best practices
- have strong typing
- support extensible block rendering
- separate data logic from UI
- be maintainable as the project grows

## Tech Stack
Frontend
- Next.js 16 (App Router)
- TypeScript
- shadcn/ui
- TailwindCSS

Backend / CMS
- Sanity CMS
- GROQ queries

## Instructions
1. Analyze the provided code, explain the problems clearly and identify:
    - schema inconsistencies
    - type mismatches
    - GROQ issues
    - rendering architecture problems
    - scalability issues
2. Help me render the SubSectionBlock and TableBlock.
3. Suggest schema types that can be useful in the system.

## Output Format
- Structure your response in the following order:
- Architecture Issues Found
- Schema Improvements
- TypeScript Improvements
- Improved GROQ Query
- Recommended Folder Structure
- Include production-ready code examples.

## Errors
- Currently having the same error in section and subsection type
- Type '(({ type: "object"; name: "textBlock"; } & Omit<ObjectDefinition, "preview"> & { preview?: PreviewConfig<Record<string, string>, Record<never, any>> | undefined; }) | ({ ...; } & ... 1 more ... & { ...; }) | ({ ...; } & ... 1 more ... & { ...; }) | ({ ...; } & ... 1 more ... & { ...; }) | ({ ...; } & ... 1 more ... ...' is not assignable to type 'ArrayOfType<"string" | "number" | "boolean" | "object" | "array" | "block" | "date" | "datetime" | "document" | "file" | "geopoint" | "image" | "reference" | "crossDatasetReference" | "globalDocumentReference" | "slug" | "text" | "url" | "email", undefined>[]'.
  Type '({ type: "object"; name: "textBlock"; } & Omit<ObjectDefinition, "preview"> & { preview?: PreviewConfig<Record<string, string>, Record<never, any>> | undefined; }) | ({ ...; } & ... 1 more ... & { ...; }) | ({ ...; } & ... 1 more ... & { ...; }) | ({ ...; } & ... 1 more ... & { ...; }) | ({ ...; } & ... 1 more ... &...' is not assignable to type 'ArrayOfType<"string" | "number" | "boolean" | "object" | "array" | "block" | "date" | "datetime" | "document" | "file" | "geopoint" | "image" | "reference" | "crossDatasetReference" | "globalDocumentReference" | "slug" | "text" | "url" | "email", undefined>'.
    Type '{ type: "object"; name: "textBlock"; } & Omit<ObjectDefinition, "preview"> & { preview?: PreviewConfig<Record<string, string>, Record<never, any>> | undefined; }' is not assignable to type 'ArrayOfType<"string" | "number" | "boolean" | "object" | "array" | "block" | "date" | "datetime" | "document" | "file" | "geopoint" | "image" | "reference" | "crossDatasetReference" | "globalDocumentReference" | "slug" | "text" | "url" | "email", undefined>'.
      Type '{ type: "object"; name: "textBlock"; } & Omit<ObjectDefinition, "preview"> & { preview?: PreviewConfig<Record<string, string>, Record<never, any>> | undefined; }' is not assignable to type '(Omit<ArrayOfEntry<ObjectDefinition>, "validation" | "initialValue"> & { validation?: SchemaValidationValue; initialValue?: any; }) | ArrayOfEntry<...>'.
        Type '{ type: "object"; name: "textBlock"; } & Omit<ObjectDefinition, "preview"> & { preview?: PreviewConfig<Record<string, string>, Record<never, any>> | undefined; }' is not assignable to type 'Omit<ArrayOfEntry<ObjectDefinition>, "validation" | "initialValue"> & { validation?: SchemaValidationValue; initialValue?: any; }'.
          Type '{ type: "object"; name: "textBlock"; } & Omit<ObjectDefinition, "preview"> & { preview?: PreviewConfig<Record<string, string>, Record<never, any>> | undefined; }' is not assignable to type '{ validation?: SchemaValidationValue; initialValue?: any; }'.
            Types of property 'validation' are incompatible.
              Type 'ValidationBuilder<ObjectRule, Record<string, unknown>> | undefined' is not assignable to type 'SchemaValidationValue'.
                Type 'ValidationBuilder<ObjectRule, Record<string, unknown>>' is not assignable to type 'SchemaValidationValue'.
                  Type 'ValidationBuilder<ObjectRule, Record<string, unknown>>' is not assignable to type '(rule: Rule, context?: ValidationContext | undefined) => SchemaValidationValue'.
                    Type 'RuleBuilder<ObjectRule, Record<string, unknown>>' is not assignable to type 'SchemaValidationValue'.
                      Type 'ObjectRule' is not assignable to type 'SchemaValidationValue'.
                        Type 'RuleDef<ObjectRule, Record<string, unknown>>' is missing the following properties from type 'Rule': _type, _level, _required, _typeDef, and 33 more.

## Codebase
### documents/proposal.tsx
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

### objects/section.ts
export const sectionType = defineType({
  name: 'section',
  title: 'Section',
  type: 'object',
  fields: [
    //Title
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
    }),
    //Section
    defineField({
      name: 'type',
      title: 'Section Type',
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
      of: blockTypes,
    }),
  ],
})

### blocks/textBlock.ts
export const textBlock = defineType({
    name: 'textBlock',
    title: 'Text Block',
    type: 'object',
    fields:[
        //Title
        defineField({
            name: 'title',
            title: 'Section Title',
            type: 'string'
        }),
        //Content
        defineField({
            name: 'content',
            title: 'Section Content',
            type: 'array',
            of: [{ type: 'block' }]
        }),
    ]
})

### blocks/tableBlock.ts
export const tableBlock = defineType({
    name: 'tableBlock',
    title: 'Table Block',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string'
        }),
        defineField({
            name: 'table',
            title: 'Table',
            type: 'table'
        })
    ]
})

### blocks/imageBlock.ts
export const imageBlock = defineType({
    name: 'imageBlock',
    title: 'Image Block',
    type: 'object',
    fields: [
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: { hotspot: true },
            fields: [
                {
                    name: 'alt',
                    title: 'Alt Title',
                    type: 'string'
                }
            ]
        }),
        defineField({
            name: 'caption',
            title: 'Image Caption',
            type: 'string'
        })
    ],
})

### blocks/subsectionBlock.ts
export const subSectionBlock = defineType({
    name: 'subsectionBlock',
    title: 'Sub-Section Block',
    type: 'object',
    fields: [
        //Title
        defineField({
            name: 'title',
            title: 'SubSection Title',
            type: 'string',
        }),
        //Content
        defineField({
            name: 'content',
            title: 'SubSection Content',
            type: 'array',
            of: [{ type: 'block' }]
        }),
        //Blocks
        defineField({
            name: 'blocks',
            title: 'Blocks',
            type: 'array',
            of: [
                textBlock,
                imageBlock,
                tableBlock,
                sliderBlock
            ]
        })
    ]
})

### blocks/SlideBlock.ts
export const sliderBlock = defineType({
    name: 'sliderBlock',
    title: 'Slider Block',
    type: 'object',
    fields:[
        defineField({
            name: 'title',
            title: 'Slider Title',
            type: 'string'
        }),
        defineField({
            name: 'slides',
            title: 'Slides',
            type: 'array',
            of: [{ type: 'slide' }],
            validation: (rule) => rule.required(),
        })
    ],
    preview: {
        select: {
            title: 'title',
            slides: 'slides',
        },
        prepare({ title, slides }) {
            return {
                title: title || 'Slider Block',
                slides: `${slides?.length || 0} slides`
            }
        }
    }
})

### blocks/pricingBlock.ts
export const pricingBlock = defineType({
    name: 'pricingBlock',
    title: 'Pricing Block',
    type: 'object',
    fields: [
        defineField({
            name: 'name',
            title: 'Pricing Title',
            type: 'string'
        }),
        defineField({
            name: 'items',
            title: 'Pricing Items',
            type: 'array',
            of: [{ type: 'pricingItem' }],
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'total',
            title: 'Total Price',
            type: 'number',
        })
    ]
})

### objects/slide.ts
export const slide = defineType({
    name: 'slide',
    title: 'Slide',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Slide Title',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Slide Description',
            type: 'array',
            of: [{ type: 'block' }],
        }),
        defineField({
            name: 'image',
            title: 'Slide Image',
            type: 'image',
            options: { hotspot: true },
            fields: [
                defineField({
                    name: 'alt',
                    title: 'Alt Text',
                    type: 'string'
                })
            ]
        })
    ],
    preview: {
        select: {
            title: 'title',
            media: 'image',
        }
    }
})

### objects/pricingItem.ts
export const pricingItem = defineType({
    name: 'pricingItem',
    title: 'Pricing Item',
    type: 'object',
    fields: [
        defineField({
            name: 'name',
            title: 'Service Name',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'array',
            of: [{ type: 'block' }]
        }),
        defineField({
            name: 'price',
            title: 'Price',
            type: 'number',
        }),
        defineField({
            name: 'currency',
            title: 'Currency',
            type: 'string',
            options: {
                list: [
                    {
                        value: 'usd',
                        title: 'USD'
                    },
                    {
                        value: 'mxn',
                        title: 'MXN'
                    }
                ]
            }
        })
    ],
    preview: {
        select: {
            title: 'name',
            subtitle: 'price'
        }
    }
})

### blocks/index.ts
export const blockTypes = [
    textBlock,
    tableBlock,
    sliderBlock,
    pricingBlock,
    subSectionBlock
]

### app/lib/queries/proposal.ts
export const proposalQuery = groq`
*[_type == "proposal" && slug.current == $slug][0]{
  _id,
  title,
  "slug": slug.current,

  meta{
    date,
    industry,
    location,
    tags
  },

  sections[]{
    _key,
    _type,
    title,

    blocks[]{
     ${blockProjection}
    }
  }
}
`
### app/lib/queries/block.ts
export const blockProjection = `
    _key,
    _type,
    title,
    content,
    caption,
    asset->{
        _id,
        url,
        metadata{
            lqip,
            dimensions
        }
    },
    table{
        rows[]{
            _key,
            cells
        }
    },
    blocks[]{
        _key,
        _type,
        title,
        content,
        caption,
        asset->{
            _id,
            url,
            metadata{
                lqip,
                dimensions
            }
        },
        table{
            rows[]{
                _key,
                cells,
            }
        },
        blocks[]{
            _key,
            _type,
            title,
            content,
            caption,
            asset->{
                _id,
                url,
                metadata{
                    lqip,
                    dimensions
                }
            },
            table{
                rows[]{
                    _key,
                    cells
                }
            }
        }
    }
`