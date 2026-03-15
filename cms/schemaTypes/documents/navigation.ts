import { defineField, defineType } from "sanity";

export const navigationType = defineType({
    name: 'navigation',
    title: 'Navigation',
    type: 'document',
    fields: [
        //Title
        defineField({
            name: 'title',
            title: 'Menu Title',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        //Placement
        defineField({
            name: 'placement',
            title: 'Placement',
            type: 'string',
            options: {
                list: [
                    {
                        title: 'Header',
                        value: 'header'
                    },
                    {
                        title: 'Footer',
                        value: 'footer'
                    },
                ]
            },
            validation: (rule) => rule.required(),
        }),
        //Context
        defineField({
            name: 'context',
            title: 'Context',
            type: 'string',
            options: {
                list: [
                    {
                        title: 'Client',
                        value: 'client'
                    },
                    {
                        title: 'Dashboard',
                        value: 'dashboard'
                    },
                    {
                        title: 'Proposal Page',
                        value: 'proposal'
                    },
                    {
                        title: 'Landing Page',
                        value: 'landing'
                    },
                ]
            },
            validation: (rule) => rule.required(),
        }),
        //Logo
        defineField({
            name: 'logo',
            title: 'Menu Logo',
            type: 'image',
            options: { hotspot: true }
        }),
        //Items
        defineField({
            name: 'items',
            title: 'Navigation Menu',
            type: 'array',
            of: [{ type: 'navigationItem' }]
        }),
    ]
})