import { textBlockProjection } from "../blocks/textBlock";
import { imageBlockProjection } from "../blocks/imageBlock";
import { tableBlockProjection } from "../blocks/tableBlock";
import { sliderBlockProjection } from "../blocks/sliderBlock";

export const blockProjection = `
    ...,
    ${textBlockProjection},
    ${imageBlockProjection},
    ${tableBlockProjection},
    ${sliderBlockProjection},
    blocks[]{
        ...,
        ${textBlockProjection},
        ${imageBlockProjection},
        ${tableBlockProjection},
        ${sliderBlockProjection},
    }
`