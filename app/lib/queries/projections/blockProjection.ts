import { textBlockProjection } from "../blocks/textBlock";
import { imageBlockProjection } from "../blocks/imageBlock";
import { tableBlockProjection } from "../blocks/tableBlock";
import { sliderBlockProjection } from "../blocks/sliderBlock";
import { accordionBlockProjection } from "../blocks/accordionBlock";

export const blockProjection = `
    ...,
    ${textBlockProjection},
    ${imageBlockProjection},
    ${tableBlockProjection},
    ${sliderBlockProjection},
    ${accordionBlockProjection},
    blocks[]{
        ...,
        ${textBlockProjection},
        ${imageBlockProjection},
        ${tableBlockProjection},
        ${sliderBlockProjection},
        ${accordionBlockProjection}
    }
`