import { linkFragment } from "../fragments/link";

export const navigationItemProjection = `
_key,
label,
icon,
${linkFragment},

children[]{
  _key,
  label,
  icon,
  ${linkFragment},

  children[]{
    _key,
    label,
    icon,
    ${linkFragment}
  }
}
`