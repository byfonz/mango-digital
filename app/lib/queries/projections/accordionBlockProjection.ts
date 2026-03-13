import { nestedBlockProjection } from "./nestedBlockProjection";

export const accordionBlockProjection = `
_type == 'accordionBlock' => {
    _key,
    _type,
    title,
    items[]{
        _key,
        title,
        content[]{
            ${nestedBlockProjection}
        }
    }
}
`