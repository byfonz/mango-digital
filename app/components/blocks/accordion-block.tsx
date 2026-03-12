import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { AccordionBlockType } from "@/types/blocks/accordionBlock"

interface Props {
    block: AccordionBlockType;
};

export function AccordionBlock({ block }: Props) {
    return (
        <Accordion type="single">
            {block.items.map((item, index) => (
                <AccordionItem value={item._key}>
                    <AccordionTrigger>{item.title}</AccordionTrigger>
                    <AccordionContent>{item.content}</AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    )
}