import { blockProjection } from "./blockProjection";

export const sectionProjection = `
    _key,
    type,
    title,
    blocks[]{
        ${blockProjection}
    }
`