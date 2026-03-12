import { Section } from "@/types/section";
import { BlockRenderer } from "../block-renderer";

export function DefaultSection({ section }: { section: Section}) {
    if (!section.blocks?.length) {
        return null
    };
    
    return (
        <section className="space-y-6">
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
    );
}