import {defineField, defineType} from 'sanity';

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