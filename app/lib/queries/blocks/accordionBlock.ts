import { nestedBlockProjection } from "../projections/nestedBlockProjection";

export const accordionBlockProjection = `
_type == 'accordionBlock' => {
    _key,
    _type,
    items[]{
        _key,
        title,
        content[]{
            ${nestedBlockProjection}
        }
    }
}
`