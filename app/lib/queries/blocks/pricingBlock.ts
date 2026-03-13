import { pricingFragment } from "../fragments/pricing";

export const pricingBlockProjection = `
_type == 'pricingBlock' => {
    ${pricingFragment}
}
`