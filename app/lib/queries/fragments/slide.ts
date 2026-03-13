import { imageFragment } from "./image";

export const slideFragment = `
    slides[]{
        _key,
        title,
        description,
        image{
            ${imageFragment}
        }
    }
`