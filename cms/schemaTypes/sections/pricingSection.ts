import { defineField, defineType } from "sanity";

export const pricingSection =  defineType({
    name: 'pricingSection',
    title: 'Pricing Section',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string'
        }),
        defineField({
            name: 'plans',
            title: 'Plans',
            type: 'array',
            of: [{ type: 'pricingPlan' }]
        }),
        defineField({
            name: 'variant',
            title: 'Variant',
            type: 'string',
            options: {
                list: [
                    {
                        title: 'Card',
                        value: 'card'
                    },
                    {
                        title: 'Table',
                        value: 'table',
                    },
                    {
                        title: 'Tiered',
                        value: 'tiered',
                    }
                ]
            }
        }),
    ]
})