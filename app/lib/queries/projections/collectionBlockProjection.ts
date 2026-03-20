export const collectionBlockProjection = `
_type == "collectionBlock" => {
    _type,
    _key,
    items[]->{
        _type,
        _id,
        title,
        "slug": slug.current,
    }
}
`