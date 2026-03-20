import { buttonFragment } from "../fragments/button";

export const ctaBlockProjection = `
_type == "ctaBlock" => {
    _type,
    _key,
    actions[]->{
        ${buttonFragment}
    }
}
`