import { groq } from "next-sanity";

export const proposalQuery = groq`
*[_type == "proposal" && slug.current == $slug][0]{
    _id,
    title,
    "slug": slug.current,
    meta{
        date,
        industry,
        location,
        tags
    },
    sections[]{
        _key,
        type,
        title,
        blocks[]{
            _key,
            _type,
            title,
            content,
            table,
            blocks[]{
                _key,
                _type,
                title,
                content,
                table,
            }
        }
    }
}
`