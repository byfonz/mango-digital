import { Block } from "./block";

export type ContentBlock = {
    _key: string;
    _type: "contentBlock";
    label: string;
    title: string;
    subtitle: string;
    content: Block[];
}