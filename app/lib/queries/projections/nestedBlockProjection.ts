import { imageBlockProjection } from "../blocks/imageBlock";
import { sliderBlockProjection } from "../blocks/sliderBlock";
import { tableBlockProjection } from "../blocks/tableBlock";
import { textBlockProjection } from "../blocks/textBlock";

export const nestedBlockProjection = `
  _key,
  _type,
  ${textBlockProjection},
  ${imageBlockProjection},
  ${tableBlockProjection},
  ${sliderBlockProjection}
`