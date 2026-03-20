import {defineField, defineType} from 'sanity';

export const pricingItem = defineType({
    name: 'pricingItem',
    title: 'Pricing Plan',
    type: 'object',
    fields: [
        defineField({
            name: 'name',
            title: 'Plan Name',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'price',
            title: 'Price',
            type: 'number',
        }),
        defineField({
            name: 'features',
            title: 'Features',
            type: 'array',
            of: [{ type: 'featureItem' }]
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