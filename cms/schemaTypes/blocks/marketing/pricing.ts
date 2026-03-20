import {defineField, defineType} from 'sanity'

export const pricingBlock = defineType({
  name: 'pricingBlock',
  title: 'Pricing Block',
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
      options:{
        list:[
            {
                title: 'Card',
                value: 'card'
            },
            {
                title: 'Table',
                value: 'table'
            }
        ]
      }
    }),
    //Label
    defineField({
      name: 'label',
      title: 'Label',
      type: 'badge',
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
    //Items
    defineField({
      name: 'items',
      title: 'Pricing Items',
      type: 'array',
      of: [{type: 'pricingItem'}],
      validation: (rule) => rule.required(),
    }),
    //Total
    defineField({
      name: 'total',
      title: 'Total Price',
      type: 'number',
    }),
  ],
})
