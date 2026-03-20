export const contentBlockProjection = `
_type == "contentBlockProjection" => {
    _type,
    _key,
    title,
    subtitle,
    content[],
}
`