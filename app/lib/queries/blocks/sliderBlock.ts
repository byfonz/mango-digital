import { slideFragment } from "../fragments/slide";

export const sliderBlockProjection = `
_type == 'sliderBlock' => {
    title,
    ${slideFragment}
}
`