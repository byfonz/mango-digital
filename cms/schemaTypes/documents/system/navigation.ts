import { defineField, defineType } from "sanity";
import { placementOptions } from "../../../constants/navigation/placementOptionts"; 
import { contextOptions } from "../../../constants/navigation/contextOptions"; 

export const navigation = defineType({
    name: 'navigation',
    title: 'Menus',
    type: 'document',
    fields: [
        //Placement
        defineField({
            name: 'placement',
            title: 'Placement',
            type: 'string',
            options: {
                list: placementOptions,
            },
            validation: (rule) => rule.required(),
        }),
        //Context
        defineField({
            name: 'context',
            title: 'Context',
            type: 'string',
            options: {
                list: contextOptions,
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
        //Main Navigation
        defineField({
            name: 'items',
            title: 'Navigation Items',
            type: 'array',
            of: [{ type: 'navigationItem' }]
        }),
        //Menu Groups
        defineField({
            name: 'groups',
            title: 'Navigation Groups',
            type: 'array',
            of: [{ type: 'navigationGroup' }]
        }),
        //CTAs
        defineField({
            name: 'ctas',
            title: 'Call To Actions',
            type: 'array',
            of: [{ type: 'button' }]
        }),
        //Socials
        defineField({
            name: 'socials',
            title: 'Social Links',
            type: 'array',
            of: [{ type: 'socialLink' }]
        }),
    ],
    preview: {
        select: {
            placement: 'placement',
            context: 'context'
        },
        prepare({ placement, context }) {
            return {
                title: `${placement ?? 'Menu'}`,
                subtitle: `${context ?? 'Website'}`
            }
        }
    }
})