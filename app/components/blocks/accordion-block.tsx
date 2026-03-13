import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { AccordionBlockType } from "@/types/blocks/accordionBlock"
import { BlockRenderer } from "../block-renderer";

interface Props {
    block: AccordionBlockType;
};

export function AccordionBlock({ block }: Props) {
    return (
        <Accordion 
            type="single"
            collapsible
            className="rounded-lg border"
        >
            {block.items?.map((item) => (
                <AccordionItem 
                    key={item._key} 
                    value={item._key}
                    className="border-b px-6 py-4 last:border-b-0"
                >
                    <AccordionTrigger>{item.title}</AccordionTrigger>
                    <AccordionContent>
                        {item.content?.map((block) => (
                            <BlockRenderer
                                key={block._key}
                                block={block}
                            />
                        ))}
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    )
}