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
        //Type
        defineField({
            name: 'type',
            title: 'Type',
            type: 'string',
            options: {
                list: [
                    {
                        title: 'Navbar',
                        value: 'navbar'
                    },
                    {
                        title: 'Footer',
                        value: 'footer'
                    },
                    {
                        title: 'Sidebar',
                        value: 'sidebar'
                    },
                    {
                        title: 'Dashboard',
                        value: 'dashboard'
                    },
                ]
            },
            validation: (rule) => rule.required(),
        }),
        //Location
        defineField({
            name: 'location',
            title: 'Location',
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