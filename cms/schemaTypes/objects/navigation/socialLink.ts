import { defineField, defineType } from "sanity";

export const socialLink = defineType({
    name: 'socialLink',
    title: 'Social Link',
    type: 'object',
    fields: [
        //Platform
        defineField({
            name: 'platform',
            title: 'Platform',
            type: 'string',
            options: {
                list: [
                    {
                        title: 'Facebook',
                        value: 'facebook',
                    },
                    {
                        title: 'Instagram',
                        value: 'instagram',
                    },
                    {
                        title: 'TikTok',
                        value: 'tiktok',
                    },
                    {
                        title: 'Twitter',
                        value: 'twitter',
                    },
                    {
                        title: 'LinkedIn',
                        value: 'linkedin',
                    },
                ]
            },
            validation: (rule) => rule.required(),
        }),
        //Link
        defineField({
            name: 'link',
            title: 'Link',
            type: 'link',
            validation: (rule) => rule.required(),
        })
    ]
})