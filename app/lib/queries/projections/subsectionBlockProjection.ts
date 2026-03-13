import { nestedBlockProjection } from "./nestedBlockProjection";

export const subsectionBlockProjection = `
_type == 'subSectionBlock' => {
    _key,
    _type,
    title,
    content,
    blocks[]{
        ${nestedBlockProjection}
    }
}
`