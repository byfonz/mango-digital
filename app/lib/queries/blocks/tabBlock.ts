import { nestedBlockProjection } from "../projections/nestedBlockProjection";

export const tabBlockProjection = `
_type == 'tabBlock' => {
    _key,
    _type,
    title,
    items[]{
        _key,
        title,
        blocks[]{
            ${nestedBlockProjection}
        }
    }
}
`