import { Author } from "./author";

export type Meta = {
    _id: string;
    author?: Author;
    client: string;
    date: string;
}