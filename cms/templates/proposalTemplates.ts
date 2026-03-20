import {EarthGlobeIcon, RocketIcon} from '@sanity/icons'

export const proposalTemplates = [
    {
        id: 'proposal-website',
        title: 'Web Development Proposal',
        schemaType: 'proposal',
        icon: EarthGlobeIcon,
        value: {
            _type: 'proposal',
            project: 'Web Development',
            sections: [
                {
                    _type: 'headingBlock',
                    title: 'Web Development Proposal',
                }
            ],
        }
    },
    {
        id: 'proposal-marketing',
        title: 'Performance Marketing Proposal',
        schemaType: 'proposal',
        icon: RocketIcon,
        value: {
            _type: 'proposal',
            project: 'Web Development Proposal',
            sections: [
                {
                    _type: 'headingBlock',
                    title: 'Web Development Proposal',
                }
            ],
        }
    },
]