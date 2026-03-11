import { Section } from "@/types/section";
import { BlockRenderer } from "./block-renderer";
interface Props {
    section: Section
}

export function SectionRenderer({ section }: Props) {
    return (
        <section>
            {section.title && (
                <h2 className="text-2xl font-medium">
                    {section.title}
                </h2>
            )}
            {section.blocks.map((block) => (
                <BlockRenderer
                    key={block._key}
                    block={block}
                />
            ))}
        </section>
    )
}