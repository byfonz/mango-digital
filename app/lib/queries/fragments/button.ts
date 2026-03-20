import { linkFragment } from "./link";

export const buttonFragment = `
{
    type,
    label,
    ${linkFragment},
    variant,
    size,
}
`