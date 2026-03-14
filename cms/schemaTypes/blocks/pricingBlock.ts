import {defineField, defineType} from 'sanity';

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
            of: [{ type: 'pricingPlan' }],
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'total',
            title: 'Total Price',
            type: 'number',
        })
    ]
})