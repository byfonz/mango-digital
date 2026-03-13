import { tableFragment } from "../fragments/table";

export const tableBlockProjection = `
_type == 'tableBlock' => {
    ${tableFragment}
}
`