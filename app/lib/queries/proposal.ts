import { groq } from "next-sanity";

export const proposalQuery = groq`
*[_type == "proposal" && slug.current == $slug][0]{
    title,
    "slug": slug.current,
    meta,
    sections[]{
        title,
        tab,
        blocks[]{
            _type,
            title,
            content,
            table,
            _type == "subSectionBlock" => {
                title,
                content,
                blocks[],
            }
        }
    }
}
`