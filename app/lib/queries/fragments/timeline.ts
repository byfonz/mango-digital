import { slideFragment } from "./slide";

export const timelineFragment = `
    items[]{
        _key,
        title,
        date,
        description,
        ${slideFragment}
    }
`