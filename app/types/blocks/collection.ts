import { Post } from "../documents/post";
import { Project } from "../documents/project";

export type CollectionBlock = {
    _key: string;
    _type: "headingBlock";
    items: CollectionItem[]
}

export type CollectionItem = Post | Project