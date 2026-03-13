import { timelineFragment } from "../fragments/timeline";

export const timeBlockProjection = `
_type == 'timelineBlock' => {
    ${timelineFragment}
}
`