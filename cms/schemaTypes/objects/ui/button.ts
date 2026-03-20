import { defineField, defineType } from "sanity";

export const button = defineType({
    name: 'button',
    title: 'Button',
    type: 'object',
    fields: [
        //Label
        defineField({
            name: 'label',
            title: 'Button Title',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        //Link
        defineField({
            name: 'href',
            title: 'Button Link',
            type: 'link',
            validation: (rule) => rule.required(),
        }),
        //Variant
        defineField({
            name: 'variant',
            title: 'Button Style',
            type: 'string',
            options: {
                list: [
                    {
                        title: 'Default',
                        value: 'default'
                    },
                    {
                        title: 'Outline',
                        value: 'outline'
                    },
                    {
                        title: 'Secondary',
                        value: 'secondary'
                    },
                    {
                        title: 'Ghost',
                        value: 'ghost'
                    },
                    {
                        title: 'Destructive',
                        value: 'destructive'
                    },
                    {
                        title: 'Link',
                        value: 'link'
                    },
                    {
                        title: 'Icon',
                        value: 'icon'
                    },
                ]
            },
            initialValue: 'default',
        }),
        //Size
        defineField({
            name: 'size',
            title: 'Button Size',
            type: 'string',
            options: {
                list: [
                    {
                        title: 'Extra Small',
                        value: 'xs'
                    },
                    {
                        title: 'Small',
                        value: 'sm'
                    },
                    {
                        title: 'Default',
                        value: 'default'
                    },
                    {
                        title: 'Large',
                        value: 'lg'
                    },
                ]
            },
            initialValue: 'default',
        }),
    ]
})