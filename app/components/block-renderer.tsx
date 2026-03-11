import { Block } from "@/types/block";
import { TextBlock } from "./blocks/text-block";

interface Props {
    block: Block;
};

export function BlockRenderer ({ block }: Props){
    switch (block._type) {
        case 'textBlock':
            return <TextBlock block={block}/>;
    
        default:
            return null;
    }
}