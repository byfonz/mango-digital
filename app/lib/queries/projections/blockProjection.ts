import { textBlockProjection } from "../blocks/textBlock";
import { imageBlockProjection } from "../blocks/imageBlock";
import { tableBlockProjection } from "../blocks/tableBlock";
import { sliderBlockProjection } from "../blocks/sliderBlock";
import { accordionBlockProjection } from "../blocks/accordionBlock";
import { subsectionBlockProjection } from "../blocks/subsectionBlock";

export const blockProjection = `
    _key,
    _type,
    ${textBlockProjection},
    ${imageBlockProjection},
    ${tableBlockProjection},
    ${sliderBlockProjection},
    ${accordionBlockProjection},
    ${subsectionBlockProjection}
`