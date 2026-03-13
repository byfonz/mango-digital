import { imageFragment } from "../fragments/image";

export const imageBlockProjection = `
_type == 'imageBlock' => {
    caption,
    image{
        ${imageFragment}
    }
}
`