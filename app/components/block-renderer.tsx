import { Block } from "@/types/block";
import { TextBlock } from "./blocks/text-block";
import { SubSectionBlock } from "./blocks/subsection-block";
import { TableBlock } from "./blocks/table-block";
import { ImageBlock } from "./blocks/image-block";
interface Props {
    block: Block;
};

export function BlockRenderer ({ block }: Props){
    switch (block._type) {
        case 'textBlock':
            return <TextBlock block={block}/>;

        case 'tableBlock':
            return <TableBlock block={block}/>;

        case 'imageBlock':
            return <ImageBlock block={block}/>;

        case 'subsectionBlock':
            return <SubSectionBlock block={block}/>
    
        default:
            return null;
    }
}