import { navigationItemProjection } from "./navigationItemProjection";

export const navigationSectionProjection = `
    title,
    items[]{
        _key,
        ${navigationItemProjection}
    }
`