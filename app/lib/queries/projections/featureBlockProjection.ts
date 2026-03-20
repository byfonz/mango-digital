import { featureFragment } from "../fragments/feature";

export const featureBlockProjection = `
_type == 'featureBlock' => {
    ${featureFragment}
}
`