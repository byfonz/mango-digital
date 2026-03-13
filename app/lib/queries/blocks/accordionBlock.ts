import { blockProjection } from "../projections/blockProjection";

export const accordionBlockProjection = `
_type == 'accordionBlock' => {
    _key,
    _type,
    title,
    items[]{
        _key,
        title,
        blocks[]{
            ${blockProjection}
        }
    }
}
`