import { faqItemFragment } from "../fragments/faqItemFragment";

export const faqBlockProjection = `
_type == "faqBlock" => {
    _type,
    _key,
    items[]->{
        ${faqItemFragment}
    }
}
`