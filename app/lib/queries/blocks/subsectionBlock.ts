import { nestedBlockProjection } from "../projections/nestedBlockProjection";

export const subsectionBlockProjection = `
_type == "subsectionBlock" => {
  _key,
  _type,
  title,
  content,

  blocks[]{
    ${nestedBlockProjection}
  }
}
`