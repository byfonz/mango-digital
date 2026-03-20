import { Block } from "../blocks/block";
import { Meta } from "../objects/meta";

export type Post = {
    _id: string;
    title: string;
    slug: string;
    meta: Meta;
    blocks?: Block[];
}